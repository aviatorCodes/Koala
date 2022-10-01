const config = require("../config.json");
const { client } = require("../index.js");
const { prefix } = require("../database/schema/prefix");
module.exports = {
  name: "message",
  once: false,
  execute: async (message) => {
    let runprefix;
    prefix.findOne({ guildID: message.guild.id }).then(async (res) => {
      runprefix = !res.prefix ? config.prefix : res.prefix;

      const args = message.content.slice(runprefix.length).trim().split(/ +/g);

      const command = args.shift().toLowerCase();

      if (!client.commands.has(command)) return;

      try {
        client.commands.get(command).run(client, message, args);
      } catch (error) {
        console.error(error);
      }
      if (!res) {
        let newPrefix = new prefix({
          guildID: message.guild.id,
          prefix: config.prefix,
        });
        await newPrefix.save();
      }
    });
  },
};
