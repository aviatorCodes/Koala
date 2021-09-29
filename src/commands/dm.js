const Discord = require('discord.js')

module.exports = {
    name: 'dm',
    description: 'Sends message to mentioned user',
    execute(message, args){
        if(message.content.startsWith("-dm")) {
            const whattosend = message.content.slice("".length).trim().split(/ +/);
           whattosend.shift().toLowerCase().split(" ")[1]
           const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
           if(!member) return message.channel.send('Provide a user')
           if(!whattosend[1]) return message.channel.send('Please provie some content to message them')
           member.send(whattosend.slice(1).join(" "))
           .then(() => {
            message.channel.send(`<a:Tikk:868847290197106708> | The DM was sent to ${member}`)
          })
        }
    }
}