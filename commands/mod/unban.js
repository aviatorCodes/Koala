

module.exports = {
    name: "unban",
    description: "unbans a specific user",
    async run (client, message, args) {
  try{
    if (
        message.member?.permissions.has("ADMINISTRATOR") ||
        message.author.id === "924252039737905162"
      ) {
        if (!args[0]) {
          message.reply("Specify the user you dumbo");
          return;
        }
        message.guild?.members.unban(args[0]).then((_) => {
          message.reply(
            `Unbanned user cos ${message.author} thought its a good idea <:ono:968816131156635688>`
          );
        });
      }
  }catch(err){
  console.log(data.cmd.name + " Error:\n" + err)
  return message.channel.send("An error occurred while trying to run this command")
  }
  
  }}