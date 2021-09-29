const Discord = require('discord.js')

module.exports = {
 name: 'nickname',
 description: 'Set a nickname for a person',
 execute(message, args) {
       const person = message.mentions.members.first() || message.guild.members.cache.get(args[1])
       const user = message.mentions.users.first()
       if(!user, !person) return message.channel.send("Pls mention the member")
 
       let nicks = args.slice(1).join(" ")


      if(nicks.length > 32) return message.channel.send('The nickname cannot be more than 32 characters')
      if(nicks.length < 0) return message.channel.send('Nickname is too short oops')
 
      try {
        person.setNickname(nicks).then(() => {
          let embed = new Discord.MessageEmbed()
          .setAuthor(`Successfully Changed ✅`)
          .setDescription(`Changed nickname to "**${nicks}**"\n\n Original name: ${user.username}`)
          .setFooter(`Name Kept By: ${message.author.username}`)
          .setTimestamp()
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .setColor("PURPLE")
          message.channel.send(embed)
        })
      } catch (error) {
        message.channel.send("I couldn't change that member's nickname")
      }
    },
};