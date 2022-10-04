
const fs = require("fs");
const util = require("util");
const readdir = util.promisify(fs.readdir);
const eventload = async () => {
  const eventFiles = await fs
    .readdirSync("./events")
    .filter((file) => file.endsWith(".js"));

  for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
      client.once(event.name, (client, ...args) =>
        event.execute(client, ...args)
      );
    } else {
      client.on(event.name, (client, ...args) =>
        event.execute(client, ...args)
      );
    }
  }
};

module.exports = eventload;
