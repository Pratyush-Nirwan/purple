module.exports = {
    name: 'auditlog',
    async execute(title, reason, client, Discord){
       const logChannel = client.channels.cache.get('776115392098598913');

       let embed = new Discord.MessageEmbed()
       .setTitle(`📝Log`)
       .setDescription(title)
       .addField("Reason:", `${reason}`)
       .setColor("#2F3136")
       .setTimestamp()

       logChannel.send({embeds:[embed]});
    }  
}