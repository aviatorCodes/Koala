const Discord = require('discord.js')
const fetch = require('node-fetch') 

module.exports = {
    name: 'wiki',
    description: 'fetches information of subject from wikipedia',
    async execute(message, args, client){
        const wiki = args.slice().join(' ')
        if(!wiki) message.channel.send("Pls mention the thing you are searching for?")
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`

        let response
        try {
            response = await fetch(url).then(res => res.json())
        } catch (e) {
            return message.channel.send('A error occured pls try again...')
        }

        try {
            if(response.type === 'disambiguation') {
                const embed = new Discord.MessageEmbed()
                .setTitle(response.title)
                .setColor("RED")
                .setURL(reply.content_urls.desktop.page)
                .setDescription([`
                ${response.extract}
                Links for what you searched [Link](${response.content_urls.desktop.page})`])
                .setTimestamp()
                .setFooter(`Searched by ${message.author.username}`)
                message.channel.send(embed)
            }
             else {
                 const embed = new Discord.MessageEmbed()
                 .setColor("ORANGE")
                 .setTitle(response.title)
                 .setThumbnail(response.thumbnail.source)
                 .setURL(response.content_urls.desktop.page)
                 .setDescription(response.extract)
                 .setTimestamp()
                 .setFooter(`Searched by ${message.author.username}`)
                 message.channel.send(embed)
            } 
        } 
        catch {
            return message.channel.send("Provide a valid search")
        }        
    }
}