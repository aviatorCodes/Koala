const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
    name: 'banner',
    description: 'gets the banner of mentioned user',
    execute(message, args, client){
        if(message.content.startsWith('-banner')) {
            const user = message.mentions.users.first()
            if(!user) return message.channel.send("Pls input a vaild user")
            axios.get(`https://discord.com/api/users/${user.id}`, {
                headers: {
                    Authorization: `Bot ${client.token}`,
                },
            })
            .then(res => {
                const { banner, accent_color } = res.data;

                if(banner) {
                    const extension = banner.startsWith("a_") ? '.gif' : '.png';
                    const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`;

                    const embed = new Discord.MessageEmbed()
                    .setAuthor("Banner:")
                    .setDescription(`${user.username}'s Banner`)
                    .setColor("BLUE")
                    .setFooter(`Requested By: ${message.author.username}`)
                    .setTimestamp()
                    .setImage(url)
                    message.channel.send(embed)
                }  else {
                    if(!banner) {
                        let e = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}'s Banner:`)
                        .setDescription(`<a:Hexklamation:870873454440755201> | Banner not found\n\nUser dosen't have a valid banner\n\nBanner: None\n\nColor: ${accent_color || "No Color"}`)
                        .setFooter(`Requested By: ${message.author.username}`)
                        .setTimestamp()
                        .setColor(accent_color)
                        message.channel.send(e)
                    }
                }
            });

        }
    }
}