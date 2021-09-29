const Discord = require('discord.js')

module.exports = {
    name: 'unlock',
    description: 'unlocks the channel',
    async execute(message, args){
        if(!message.content.startsWith("-unlock")) return
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Permission Missing")

        let msg = await message.channel.send("In Progress")

        try {
            message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                SEND_MESSAGES: true,
                ADD_REACTIONS: true
            })
            msg.edit("<a:tik_mark:868411426686005268> | UnLocked The Channel Successfully")
        } catch (e) {
            console.log(e)   
        }

    }
}