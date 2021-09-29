const Discord = require('discord.js')

module.exports = {
    name: 'slowmode',
    description: 'enables slowmode in channel',
    execute(message, args){
        if(!message.content.startsWith("-slowmode")) return
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Permission Missing") 
            let time = args[0]
            if(!time) return message.channel.send("Time must be in seconds only")
            if(isNaN(time)) return message.channel.send("Pls provide the time in number")

            message.channel.setRateLimitPerUser(time, 'No reason')

            message.channel.send(`Slowmode has been enabled on this channel, Duration: \`${time} sec\``)

        
    }
}