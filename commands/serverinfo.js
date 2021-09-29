const Discord = require('discord.js')

module.exports = {
    name: 'serverinfo',
    description: 'Gives information about the guild',
    execute(message, args){
        if(message.content.startsWith('-serverinfo')) {
            let embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name}`)
            .setTimestamp()
            .setFooter(`Searched By: ${message.author.username}`)
            .setColor("BLUE")
            .setThumbnail(message.guild.iconURL())
            .addField("General Information", [
                `ID: ${message.guild.id}`,

                `Region: ${message.guild.region}`,

                `Owner: ${message.guild.owner}`,

                `Created: ${message.guild.createdAt}`,

                `Members: ${message.guild.memberCount}`
            ])
            .addField("Server Data", [
                `Roles: ${message.guild.roles.cache.size}`,

                `Channels: (Text: ${message.guild.channels.cache.filter((ch) => ch.type === 'text').size} | Voice: ${message.guild.channels.cache.filter((ch) => ch.type === 'voice').size})`,
                `Emojis: (${message.guild.emojis.cache.size}) (Normal: ${message.guild.emojis.cache.filter((e) => !e.animated).size}) | (Animated: ${message.guild.emojis.cache.filter((e) => e.animated).size})`,
                `Joinable: ${message.guild.maximumMembers}`
            ])
            .addField("Additional Information", [
                `Boosts: ${message.guild.premiumSubscriptionCount}`,

                `Partnered: ${message.guild.partnered || "Not Partnered"}`,

                `Verified: ${message.guild.verified || "Not Verified"}`,

                `Description: ${message.guild.description || "No Description"}`
            ])
            message.channel.send(embed)
        }
    }
}