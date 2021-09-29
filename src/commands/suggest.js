const Discord = require('discord.js')

module.exports = {
    name: 'suggest',
    description: 'gvies a suggestion to the bot',
    execute(message, args){
        if(message.content.startsWith('-suggest')) {
            let messageArgs = args.join(' ')
            if(!messageArgs) return message.channel.send("You need to suggest something")
            const embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setDescription(`Suggestion: ${messageArgs}`)

            message.channel.send(embed).then((msg) =>{
                message.author.send("Thank You For Your Suggestion")
            })
        }
    }
}