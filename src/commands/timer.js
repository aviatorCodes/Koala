const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'timer',
    description: 'sends dm to the user after time mentioned',
    execute(message, args, client){
        if(message.content.toLowerCase().startsWith("-timer")) {
            let args = message.content.split(" ").slice(1)
            
            let time = args[0];
             if(!time) return message.reply("You didn't specify a time!");
            
            let reason = args[1];
             if(!reason) return message.reply("please put the reason")
            
             message.reply(`<a:tik_mark:868411426686005268> I shall dm you when the time is up.Timer set \`${ms(ms(time))}\`<a:Typing_Intense:868789591270899743>`)
             setTimeout(function(){
             message.author.send(`${message.author} ${reason}`);
            }, ms(time));
        }

    } 
}