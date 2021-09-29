const Discord = require('discord.js')

module.exports = {
    name: 'eval',
    description: 'lets the owner use specific commands',
    async execute(message, args) {
        if(message.author.id != 740800945432035358) return message.channel.send("Only owners are allowed to use this command")
        const embed = new Discord.MessageEmbed()
        .setTitle("Evaluating<a:Load:868381778358976533>")

    const msg = await message.channel.send(embed) 
    
    try {
        const info = eval(args.join(" ").replace(/```/g, ""))
        const e = new Discord.MessageEmbed()
        .setTitle("Result: ")
        .setDescription(await info)
        .setFooter("Evaluated by Avatar#7048")
        .setTimestamp()
    await msg.edit(e)    
    } catch (error) {
        const f = new Discord.MessageEmbed()
        .setTitle("Task Failed Please Retry")    
        .setTimestamp()
    return await msg.edit(f)    
    }
    }
}