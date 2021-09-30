const Discord = require('discord.js');
const mongoose = require('mongoose')
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const config = require('./config.json');
const fs = require('fs');
const util = require("util")
const readdir = util.promisify(fs.readdir)


client.config = config;
 


mongoose.connect(config.mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true

} )



const cmdload = async() => { 
client.commands= new Discord.Collection();
let folders = await readdir("./commands/");
folders.forEach(direct =>{
  const commandFiles = fs.readdirSync('./commands/' + direct + "/").filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
      const command = require(`./commands/${direct}/${file}`);
      console.log(`Loaded Command: ${command.name}`);
      client.commands.set(command.name, command);
  }
});
}

const eventload = async() => {
    const eventFiles = await fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (client, ...args) => event.execute(client,...args));
	} else {
		client.on(event.name, (client,...args ) => event.execute( client ,...args));
	}
}
}




client.on("error", console.error);
module.exports = { client };
client.on("ready", async () => {
     cmdload()
     eventload();
	console.log("I am READY!");
	setInterval(function() {
    const activities = [`?help | ?ping`, `Fully Updated`, `Brainy Community`];
		const activity = activities[Math.floor(Math.random() * activities.length)];
		client.user.setActivity(activity, { type: "WATCHING" });
	}, 5000);
});





client.login(config.token);