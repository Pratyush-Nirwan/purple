const fs = require('fs')
const db = require("quick.db")
module.exports =  {
    name: 'afk',
    description:"set your afk status, so if anyone pings you and you are afk they will be notified that you are afk!",
    usage: '<time> (reason)',
   async execute(message, args, client, Discord){

        const {guild} = message;
        const reason = args.join(" ") || 'No reason';
        const member = guild.members.cache.get(message.author.id);
        var afkName;
        if(member.nickname === null){
            afkName = `${message.author.username.replace('[AFK]', '')}[AFK]`;
        } else{
            afkName = `${member.nickname.replace('[AFK]', '')}[AFK]`
        }
        

        const afkInfo = `${Date.now()}\n${reason}`
        db.set(`afk.${message.author.id}`,afkInfo)

        let embed = new Discord.MessageEmbed()
        .setDescription(`You are now afk \nReason: \`${reason}\``)
        .setColor(`#2F3136`)
        if(message.author.id !== guild.ownerId ){
            if(afkName.length > 32){
                message.channel.send({content: `<@${message.author.id}>`, embeds:[embed]})
            } else {
                member.setNickname(afkName);
                message.channel.send({content: `<@${message.author.id}>`, embeds:[embed]})
            }
            
        } else {
            message.channel.send({content: `<@${message.author.id}>`, embeds:[embed]})
        }
    }  
}