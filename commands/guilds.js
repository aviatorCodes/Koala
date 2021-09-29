const Discord = require('discord.js')

module.exports = {
    name: 'guilds',
    description: 'Shows how many servers is the bot in',
    execute(message, args, client){
        if(message.content === "-guilds") {
            message.channel.send(`\`\`\`Koala is in ${client.guilds.cache.size} servers\`\`\``)
            message.channel.send(`\`\`\`Watching over ${client.users.cache.size} users\`\`\``)
        }
    }
}