const Discord = require('discord.js')

module.exports = {
    name: 'info',
    description: 'shows info related to user',
    execute(message, args){
        if(message.content.toLowerCase().startsWith("-info")) {
            const member = message.mentions.members.first();
            const user = message.mentions.users.first();
            if(!member, !user) message.channel.send("Pls mention a member")
            else{
             let embed = new Discord.MessageEmbed()
             .setColor("BLUE")
             .setFooter(`${user.username}'s Information`)
             .setTimestamp()
             .addFields({
                name: "User Joined Server At",
                value: member.joinedAt
                }, {
                name: "User Created At",
                value: user.createdAt
                }, {
                name: "User Tag",
                value: user.tag
                }, {
                name: "User ID",
                value: user.id
                }, {
                name: 'Server',
                value: member.guild 
                }, {
                name: 'Removeable',
                value: member.kickable || "No" 
                }, { 
                name: 'Name In Server',
                value: member.displayName 
                }, {
                name: 'Nitro Boost',
                value: member.premiumSince || "No Boost"
                }, {
                name: 'Highest role',
                value: member.roles.highest
                }, {
                name: 'Status',
                value: user.presence.status
                }, {
                name: 'Deleted',  
                value: member.deleted || "Not Deleted"
                }, {
                name: 'Guild members',
                value: member.guild.memberCount
                }, {
                name: 'Roles(Includes @everyone)',
                value: member.roles.cache.size               
            })
            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed);
            }
        }
    }
} 