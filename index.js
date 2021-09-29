const Discord = require("discord.js")
const client = new Discord.Client()
const fetch = require("node-fetch")
const fs = require("fs");
const prefix = '-';
const snipes = new Discord.Collection();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'help'){
    client.commands.get('help').execute(message, args);
  }
  
  if(command === 'kill'){
    client.commands.get('kill').execute(message, args)
  }
  if(command === 'kick'){
    client.commands.get('kick').execute(message, args)
  }
  if(command === 'purge'){
    client.commands.get('purge').execute(message, args)
  }
  if(command === 'mute'){
    client.commands.get('mute').execute(message, args, client)
  }
  if(command === 'unmute'){
    client.commands.get('unmute').execute(message, args, client)
  }
  if(command === 'avatar'){
    client.commands.get('avatar').execute(message, args)
  }
  if(command === 'ping'){
    client.commands.get('ping').execute(message, args, client)
  }
  if(command === 'info'){
    client.commands.get('info').execute(message, args)
  }
  if(command === 'timer'){
    client.commands.get('timer').execute(message, args, client)
  }
  if(command === 'nickname'){
    client.commands.get('nickname').execute(message, args)
  }
  if(command === 'dm'){
    client.commands.get('dm').execute(message, args)
  }
  if(command === 'poll'){
    client.commands.get('poll').execute(message, args)
  }
  if(command === 'lock'){
    client.commands.get('lock').execute(message, args)
  }
  if(command === 'unlock'){
    client.commands.get('unlock').execute(message, args)
  }
  if(command === 'lyrics'){
    client.commands.get('lyrics').execute(message, args)
  }
  if(command === 'slowmode'){
    client.commands.get('slowmode').execute(message, args)
  }
  if(command === 'aboutme'){
    client.commands.get('aboutme').execute(message, args)
  }
  if(command === 'wiki'){
    client.commands.get('wiki').execute(message, args, client)
  }
  if(command === 'roleinfo'){
    client.commands.get('roleinfo').execute(message, args, client)
  }
  if(command === 'serverinfo'){
    client.commands.get('serverinfo').execute(message, args, client)
  }
  if(command === 'guilds'){
    client.commands.get('guilds').execute(message, args, client)
  }
  if(command === 'suggest'){
    client.commands.get('suggest').execute(message, args, client)
  }
  if(command === 'ban'){
    client.commands.get('ban').execute(message, args, client)
  }
  if(command === 'unban'){
    client.commands.get('unban').execute(message, args)
  }
  if(command === 'hack'){
    client.commands.get('hack').execute(message, args)
  }
  if(command === 'banner'){
    client.commands.get('banner').execute(message, args, client)
  }
  if(command === 'invite'){
    client.commands.get('invite').execute(message, args)
  }
  if(command === 'webhook'){
    client.commands.get('webhook').execute(message, args)
  }
  if(command === 'eval'){
    client.commands.get('eval').execute(message, args)
  }
});

client.on('ready', () => {
  const activities_list = 
 [
   "Summon With -help",
   "With Koalas",
   "With Animals" 
]; 
 setInterval(() => 
 {
   const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
   client.user.setActivity(activities_list[index], { type: 'PLAYING' }); 
 }, 4500); 

})



client.on('messageDelete', message => {
  if(message.mentions.users.first()) {
    const embed = new Discord.MessageEmbed()
    .setTitle("🤖 GHOST PING 🤖")
    .setDescription(`**${message.author}** Ghost Pinged **${message.mentions.users.first()}**\n\n **The Message:\n${message.content}**`)
    .setTimestamp()
    .setFooter(`Caught in 8K🎥 ${message.author.username}`)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)
  }
})

client.on('messageDelete', message => {
  snipes.set(message.channel.id, message)
  const log = client.channels.cache.get('890554368343023616')
  const deleted = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  .setTitle('Deletion log')
  .addField('message deleted by:', `${message.author}`)
  .addField(`The message:`, `${message.content}`)
  .addField(`Deleted from:`, `${message.channel}`)
  log.send(deleted)
})

client.login("ODQ0MTU0NDQ5MDAxMzE2Mzky.YKOSGA.GoueTMKgHOxoJgqWdnrtgEPE_RI")