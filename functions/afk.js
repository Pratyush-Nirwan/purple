const fs = require('fs')
const db = require("quick.db")
const moment = require('moment');
module.exports = {
    async execute(Discord, client , message){ 
        if(!message.guild || message.author.bot) return;

        const mentionMember = message.mentions.members.first();
    
        if(mentionMember){
            try{
                const data = db.fetch(`afk.${mentionMember.id}`).split('\n');
                const timestamp = Number(data[0]);
                const reason = data[1];
                const timeAgo = moment(timestamp).fromNow();
                
                let embed = new Discord.MessageEmbed()
                .setDescription(`${mentionMember} is currently AFK🌙 (${timeAgo})\nReason: \`${reason}\``)
                .setColor('#2F3136')
                message.reply({embeds:[embed]})
                
            }
            catch(e){
                return;
            }
        }
        try{
            const getData = db.fetch(`afk.${message.author.id}`).split('\n');
            if(getData){ 
                db.delete(`afk.${message.author.id}`)
                const {guild} = message;
                const member = guild.members.cache.get(message.author.id); 
                const afkName = `${member.nickname}` || `${member.username}`;
                const reset = afkName.replace(`[AFK]`, '');
                if(message.author.id !== guild.ownerId ){
                    if(reset === message.author.username){
                        member.setNickname(null);
                        message.reply({content:`You are not AFK anymore!`});
                    } else {
                        member.setNickname(reset);
                        message.reply({content:`You are not AFK anymore!`});
                    }
                    
                } else {
                    message.reply({content:`You are not AFK anymore!`});
                }
            }
        }
        catch(e){
            return;
        }

    }  
}