const readdir = util.promisify(fs.readdir);
const fs = require("fs");
const util = require("util");
const cmdload = async () => {
  client.commands = new Discord.Collection();
  let folders = await readdir("./commands/");
  folders.forEach((direct) => {
    const commandFiles = fs
      .readdirSync("./commands/" + direct + "/")
      .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
      const command = require(`./commands/${direct}/${file}`);
      console.log(`Loaded Command: ${command.name}`);
      client.commands.set(command.name, command);
    }
  });
};

module.exports = cmdload;
