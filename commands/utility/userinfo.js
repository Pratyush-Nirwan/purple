const moment = require('moment');
module.exports = {
    name: 'userinfo',
    description:"get some general info about any discord profile.",
    usage: '(person)',
    execute(message, args, client, Discord){
        let user;
if (message.mentions.users.first()) {
    user = message.mentions.users.first();
} else {
    user = message.author;
}

const member = message.guild.members.cache.get(user.id);
const rolesOfTheMember = member.roles.cache.filter(r => r.name !== '@everyone').filter(r => r.name !== '•───────EXPERTISE───────•').filter(r => r.name !== '•────────MISC────────•').filter(r => r.name !== '•────────SKILL────────•').filter(r => r.name !== '•────────DEVICES────────•').filter(r => r.name !== '•────────REGION────────•').filter(r => r.name !== '•────────PINGS────────•').filter(r => r.name !== '────•CUSTOM ROLES•────').filter(r => r.name !== '•─────PROFESSION─────•').map(role => role).join(', ');
const embed = new Discord.MessageEmbed()
    .setColor("6F2AAB")
    .setThumbnail(`${user.displayAvatarURL({
        format: 'jpg'})}`)
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Status:", `${member.presence.status}`, true)
    .addField("Game:", `${member.presence.game ? member.presence.game.name : 'None'}`, true)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Joined The Server On:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField("Roles:", rolesOfTheMember)
    message.channel.send({embeds:[embed]});
    }  
}