const Discord = require("discord.js");
const eventload = require("./utils/event");
const cmdload = require("./utils/command");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const config = require("./config.json");

const { mongoConnect } = require("./database/main");

client.config = config;

mongoConnect();
cmdload();
eventload();
client.on("error", console.error);
module.exports = { client };
client.login(config.token);
