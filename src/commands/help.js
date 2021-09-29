const Discord = require('discord.js')

module.exports = {
    name: 'help',
    description: 'sends help for user',
    execute(message, args){
        let help = new Discord.MessageEmbed()
         .setAuthor("Cute Koala", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XRBz-rf6czah1kT1ohgl6aTUuQ-IYgYAdw&usqp=CAU")
         .setTitle("<a:MultiStar:868427625910120448> Koala Is Here For You")
         .setDescription("<a:Shyienie:868782008996880394>Thank you for using Koala bot\n<a:Shyienie:868782008996880394>Invite this little Koala to your server \`'-invite'`\n<a:Shyienie:868782008996880394>If you want any improvements in this bot you can use \`'-suggest'`\n<a:Shyienie:868782008996880394>Get any song lyrics by typing \`'-lyrics'`\n<a:Shyienie:868782008996880394>You can enable slowmode if required by \`'-slowmode (seconds)'`\n<a:Shyienie:868782008996880394>You can know about this bot by using \`'-aboutme'`\n<a:Shyienie:868782008996880394>You can get any animal information by using \`'-wiki (topic)'`\n<a:Shyienie:868782008996880394>Access any server member's banner by \`'-banner @userProfile'`\n\n<a:Red_Krystal:868788451615592498>This bot can be used for kicking anyone with the help of \`'-kick @userProfile'`\n<a:Red_Krystal:868788451615592498>You can use the \`'-purge no. of messages'` to delete messages you dont want in ease\n<a:Red_Krystal:868788451615592498>Hack your friend with \`'-hack @userProfile'`\n<a:Red_Krystal:868788451615592498>Also you can use \`'-mute @userProfile'`/\`'-unmute @userProfile'` to control the user who is messaging.\n<a:Red_Krystal:868788451615592498>You can also check any member's avatar by using \`'-avatar @userProfile'`\n<a:Red_Krystal:868788451615592498>You can kill anyone with \`'-kill @userProfile'`\n<a:Red_Krystal:868788451615592498>Use \`'-guilds'` to know how many servers I am in at the moment\n\n<a:PPGon:868790557269454859>If you want to get some information of any server member by using \`'-info @userProfile'`\n<a:PPGon:868790557269454859>DM any of the user in the server via bot \`'-dm @userProfile'`\n<a:PPGon:868790557269454859>Don't know how much time you're using discord?\n<a:PPGon:868790557269454859>You can use the \`'-timer'` to remind yourself about the time\n<a:PPGon:868790557269454859>Use \`'-nickname @userProfile (nickname)'` to modify his/her nickname\n<a:PPGon:868790557269454859>Host a Poll with \`'-poll'` for any topic\n<a:PPGon:868790557269454859>Mods/Admins can use \`'-lock'`/\`'-unlock'` to lock any channel\n<a:PPGon:868790557269454859>Owner/Co-Owner can use \`'-ban @userID'`/\`'-unban @userID'` to ban and unban anyone\n<a:PPGon:868790557269454859>Anyone can check a role information by \`'-roleinfo @rolename/name the role casucally'`\n<a:PPGon:868790557269454859>Get your Guild info by \`'-serverinfo'`")
         .setColor("PURPLE")
         .setFooter(`Helped ${message.author.username}`, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4wYmlUT8Ysn6puoCDK9C-G5UzbeDQKUYDw&usqp=CAU")
         .setTimestamp()
         message.channel.send(help)
    }   
    
} 