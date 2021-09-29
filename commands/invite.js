const Discord = require('discord.js')

module.exports = {
    name: 'invite',
    description: 'sends a OAuth2Link of the bot',
    execute(message, args){
        let inv = new Discord.MessageEmbed()
        .setAuthor("Koala OAuth2")
        .setDescription(["<a:Boom:868783401803583558>Thanks for inviting Koala to your server<a:Boom:868783401803583558>", "Link: https://discord.com/api/oauth2/authorize?client_id=844154449001316392&permissions=8&scope=bot"])
        .setColor("PURPLE")
        .setFooter(`Invite Asked By: ${message.author.username}`)
        .setTimestamp()
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4wYmlUT8Ysn6puoCDK9C-G5UzbeDQKUYDw&usqp=CAU")
        message.channel.send(inv)
    }
}