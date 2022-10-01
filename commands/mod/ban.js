


module.exports = {
    name: "ban",
    description: "bans a specific user",
    async run (client, message, args) {
  try{
    
  
    if (
        message.member?.permissions.has("ADMINISTRATOR") ||
        message.author.id === "924252039737905162"
      ) {
        const user =
          message.mentions.members?.first() ||
          message.guild?.members.cache.get(args[0]);
        if (!user) {
          message.reply("Specify the user you dumbo");
          return;
        }
        if (user?.bannable == true) {
          message.reply(`User ${user} banned by ${message.author}`);
          user.ban();
        } else {
          message.reply(
            "Can't ban user with more power <:ono:968816131156635688>"
          );
          }}
  }catch(err){
  console.log(data.cmd.name + " Error:\n" + err)
  return message.channel.send("An error occurred while trying to run this command")
  }
  
  }}