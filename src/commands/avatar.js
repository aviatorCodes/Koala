const Discord = require('discord.js')

module.exports = {
    name: 'avatar',
    description: 'shows the avatar of the user',
    execute(message, args){
        if(message.content.toLowerCase().startsWith("-avatar")) {
            const user = message.mentions.users.first()
            if(!user) message.channel.send("Pls mention some user")
            else{
             let e = new Discord.MessageEmbed()
              .setTitle("Profile Picture")
              .setDescription(`${user.username}'s Avatar`)
              .setColor("BLUE")
              .setTimestamp()
              .setImage(user.displayAvatarURL({ dynamic: true }))
              .setFooter(`${user.id}`)
              message.channel.send(e);
            }
        }
    }
};