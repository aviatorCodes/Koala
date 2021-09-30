const {prefix} = require('../../database/schema/prefix');
module.exports = {
  name: "prefix",
  description: "Set a server's prefix",
  async run (client, message, args) {

	if (message.member.hasPermission("ADMINISTRATOR")){
	   let gldprefix = await prefix.findOne({guildID: message.guild.id});
	   let newPrefix = args.join(" ");
	   if(!newPrefix){
		   message.channel.send(`The current prefix is \`${gldprefix.prefix}\`pls provide new one to save`);
	   }
	   else{
		if(newPrefix.length > 4){
			   message.channel.send("Prefix is too long");
		   }else {
		gldprefix.updateOne({prefix: newPrefix});
		message.channel.send(`Prefix changed to \`${newPrefix}\``);
	}
	   }
	}else{
		message.channel.send("You don't have permission to do this");
	}


}}