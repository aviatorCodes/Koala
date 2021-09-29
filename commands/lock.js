const Discord = require('discord.js')

module.exports = {
    name: 'lock',
    description: 'locks the channel',
    async execute(message, args){
        if(!message.content.startsWith("-lock")) return
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Permission Missing")
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Koala is not having permission for this")

        let msg = await message.channel.send("In Progress...")

        try {
            message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            })
            msg.edit("<a:keross:868429525049024522> | Locked The Channel Successfully")
        } catch (e) {
            console.log(e)   
        }

    }
}