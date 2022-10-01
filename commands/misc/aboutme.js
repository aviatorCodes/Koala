const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "abt",
  description: "info about me",
  async run(client, message, args) {
    let embed = new MessageEmbed()
      .setTitle("Koala Information")
      .setDescription(
        "Made by: Avatar#8888\n\nLanguage used: JavaScript\n\nStarted at: 18th May 2021\n\nBot type: Moderation"
      )
      .setTimestamp()
      .setThumbnail(
        "https://i.pinimg.com/564x/7a/9d/42/7a9d426b057d15309f732c2a276fe1e0.jpg"
      )
      .setColor("RANDOM");
    message.channel.send(embed);
  },
};
