const Discord = require('discord.js')

module.exports = {
    name: 'mute',
    description: 'mutes the mentioned user',
    execute(message, args, client){
        if(message.content.startsWith("-mute")) {
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have that permission -_-")
            let role = message.guild.roles.cache.find(r => r.name === "muted")
            let member = message.mentions.members.first()
            let reason = args.slice(1).join(" ");
            if(!reason) reason = "No specific reason..."
            if(!role) return message.channel.send("You don't have the role in your server")
            if(!member) return message.channel.send("Pls mention someone...")
            if(member.roles.cache.has(role.id)) return message.channel.send("That user is muted already")
            try {
                member.roles.add(role) 
            .then(() => {
              message.channel.send(`<a:keross:868429525049024522> Muted ${member} With ${reason}`)
            })
            } catch (error) {
               console.error(error).then(() => {
                   message.channel.send("Something went wrong oops") 
               }) 
            }
        }
    }
}   