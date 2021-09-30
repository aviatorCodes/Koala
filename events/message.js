const config = require('../config.json');
const {client} = require('../index.js');
module.exports = {
	name: 'message',
	once: true,
	execute(message) {
		
          

     const prefix = config.prefix;

       const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
  
      if(!prefixRegex.test(message.content)) return;
  
      const [, matchedPrefix] = message.content.match(prefixRegex);
  
	  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/g);
  
	  const command = args.shift().toLowerCase();
  
	  if (!client.commands.has(command)) return;
  
  
	  try {
	      client.commands.get(command).run(client, message, args);
  
	  } catch (error) {
	      console.error(error);
	  }
  
	},
};