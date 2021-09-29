const Discord = require('discord.js')
const { WebhookClient, MessageEmbed, DiscordAPIError } = require('discord.js')

module.exports = {
    name: 'webhook',
    description: 'send updates through automated messaging',
    execute(message, args) {
        if(message.content.startsWith('-webhook')) {
            //https://discord.com/api/webhooks/892418876002938920/58l7e344-eCjqtqcFGXVmsiRKbP-s-SCeyG0jgvUGYxzIZlsO0Ffvgoiuwra1qGSOQqQ
        //id=892418876002938920
        //token=58l7e344-eCjqtqcFGXVmsiRKbP-s-SCeyG0jgvUGYxzIZlsO0Ffvgoiuwra1qGSOQqQ
        const wh = new WebhookClient('892418876002938920', '58l7e344-eCjqtqcFGXVmsiRKbP-s-SCeyG0jgvUGYxzIZlsO0Ffvgoiuwra1qGSOQqQ')

        const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setFooter("Koala message logs")
        .setTitle("Webhook")
        .setColor("PURPLE")
        .setDescription(args.join(" "))
        .setTimestamp()

        wh.send({
            username: message.author.tag,
            avatarURL: message.author.displayAvatarURL({ dynamic : true }),
            embeds: [embed]
        })
        }
    }
}