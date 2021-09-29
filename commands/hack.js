const Discord = require('discord.js')

module.exports = {
    name: 'hack',
    description: 'trys hacking the mentioned member',
    execute(message, args){
        if(message.content.startsWith("-hack")) {
             const user = message.mentions.users.first();
             if(!user) return message.channel.send("<a:Hexklamation:870873454440755201>Mention Someone to hack")
             message.channel.send("**[25%]** Finding IP<a:Load:868381778358976533>").then(m => {
             setTimeout(() => {
             m.edit("**[50%]** <a:Intense:868415185977753621> | IP FOUND Looking for email and password").then(m2 => {
             setTimeout(() => {
             m2.edit(`**[75%]** <a:round_round:870872521283629088> | Email: ||${user.username}@gmail.com|| | Password: ||${user.id}||`).then(m3 => {
             setTimeout(() => {
             m3.edit("**[100%]** <a:reactjs:870870493782212609> | Deleted Master Boot Record").then(m4 => {
             setTimeout(() => {
             m4.edit(`<a:Tikk:868847290197106708> | Done hacking ${user} all data sent to ||${message.author.tag}||`)
            }, 5500);
            });
            }, 5500);
            });
            }, 3500);
            });
            }, 5000);
         });
        };
    }
}