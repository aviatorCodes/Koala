const Discord = require('discord.js')

module.exports = {
    name: 'unmute',
    description: 'unmutes the mentioned user',
    execute(message, args, client){
        if(message.content.startsWith("-unmute")) {
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have that permission")
            let role = message.guild.roles.cache.find(role => role.name === "muted")
            let member = message.mentions.members.first()
            let reason = args.slice(2).join(" ");
            if(!reason) reason = "No specific reason..."
            if(!role) return message.channel.send("You don't have the role in your server....")
            if(!member) return message.channel.send("Pls mention someone...")
            if(!member.roles.cache.has(role.id)) return message.channel.send("That user is already unmuted")
            member.roles.remove(role)
            .then(() => {
              message.channel.send(`<a:Tikk:868847290197106708> Unmuted ${member} With ${reason}`)
            })
            .catch(() => {
              message.channel.send("Something is wrong!")
            })
        }
    }
}  