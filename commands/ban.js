const Discord = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'bans a user from a server',
    execute(message, args){
        if(message.content.startsWith('-ban')) {
            let toBan = message.mentions.members.first();
            if(!toBan) return message.channel.send("Pls mention the member you want to ban")

         if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
         if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

         const reason = args[4] || "No specific reason...";

       try {
        toBan.ban({
            reason: reason
        })
        message.channel.send(`<a:Tikk:868847290197106708> | ${toBan} has been banned from the ${message.guild.name}\nReason: ${reason}`)
       } catch (error) {
           message.channel.send("Something went wrong")
       }           
        }
    }
}