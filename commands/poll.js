const Discord = require('discord.js')

module.exports = {
    name: 'poll',
    description: 'announces a poll',
    async execute(message, args, async){
        if(message.author.bot) return;
        if (message.content.startsWith("-poll")) {
         let sentence = message.content.split(" ");
         sentence.shift();
         sentence = sentence.join(" ");
         if (!sentence) return message.reply("Correct Usage: `-poll 'topic 1' 'topic 2'`")
         let embed = new Discord.MessageEmbed()
         .setTitle("<a:Kristal:867122557756506113> POLL <a:Kristal:867122557756506113>")
         .setDescription(`**${message.author.username}**\nAsked:\n\n1️⃣ **${sentence}** 2️⃣`)
         .setTimestamp()
         .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
         .setFooter(`${message.author.username}'s Poll`)
         let pollTopic = await message.channel.send(embed);
         pollTopic.react(`1️⃣`);
         pollTopic.react(`2️⃣`);
         console.log(message.author.guild)
        };   
    }  
}  