const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    description: 'kicks any member from the guild',
    execute(message, args){
      if (message.content.startsWith('-kick')) {
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Koala is not having permission for this")
        const user = message.mentions.users.first();
        if (user) {
        const member = message.guild.member(user);
        if (member) { 
        member
        .kick()
        .then(() => {
        message.channel.send(`<a:Tikk:868847290197106708> | Successfully kicked ${user.username}`);
        })
        .catch(err => {
        message.channel.send("I couldn't kick that member");
        });
        } else {
        message.channel.send("That user isn't in this guild!");
        }
        } else {
        message.channel.send("You didn't mention the user to kick!");
        }
      }
    }
}