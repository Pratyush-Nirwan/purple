
const Levels = require("discord-xp");
const welcomeMsg = require('../../functions/welcomeMsg.js')
const moment = require('moment');
const superagent = require('superagent');

module.exports = async(Discord, client , member) => {

    //Mention the welcomer role:-
    if (!member.user.bot){
      welcomeMsg.execute(Discord, client , member)
    }
    //Welcome Message:-
    const response = await superagent.get(`https://g.tenor.com/v1/random?q=welcome_to&key=${process.env.TENOR_KEY}&limit=8`);
    const welcomeChannel = client.channels.cache.get('776107860694007810');
    let welcomeEmbed = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setThumbnail(`${member.user.displayAvatarURL({
        format: 'jpg'
})}`)
    .setDescription(`**Welcome to the server ${member.user.tag} !**\n**Enjoy your stay in the server!**\nRules:- <#776140199829831733>\nRoles:- <#776301149271752734>`)
    .setImage(response._body.results[0].media[0].tinygif.url)
    welcomeChannel.send({content: `<@${member.id}>`, embeds:[welcomeEmbed]})

    //Log the joining.
  
    const logChannel = client.channels.cache.get('795341098532077618');
    const logembed = new Discord.MessageEmbed()
    .setTitle('Joined')
    .setColor("GREEN")
    .setThumbnail(`${member.user.displayAvatarURL({
        format: 'jpg'})}`)
    .addField(`${member.user.tag}`, `${member}`)
    .addField("ID:", `\`${member.id}\``, true)
    .addField("Bot:", `\`${member.user.bot}\``, true)
    .addField("Account Created On:", `\`${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}\``, true) 
    logChannel.send({embeds:[logembed]});
    
    //Give common roles
    const memberRole = member.guild.roles.cache.get("776321406497456148");
    const role1 = member.guild.roles.cache.get("795271785297346601");
    const role2 = member.guild.roles.cache.get("795274125437567016");
    const role3 = member.guild.roles.cache.get("795274736350658580");
    const role4 = member.guild.roles.cache.get("795275064336449536");
    const role5 = member.guild.roles.cache.get("796395205116952586");
    const role6 = member.guild.roles.cache.get("796332338585272320");
    const role7 = member.guild.roles.cache.get("779718080317227008")
        
    member.roles.add(memberRole);
    member.roles.add(role1);
    member.roles.add(role2);
    member.roles.add(role3);
    member.roles.add(role4);
    member.roles.add(role5);
    member.roles.add(role6);
    member.roles.add(role7);

    //Give rank roles if rejoined.
    const newComer = member.guild.roles.cache.get("826522232309678101");
    const experienced = member.guild.roles.cache.get("836646695830814730");
    const expert = member.guild.roles.cache.get("836647761939529728");
    const professional = member.guild.roles.cache.get("836650985572007957");
    const legend = member.guild.roles.cache.get("836652115286949909");

    const user = await Levels.fetch(member.id, member.guild.id);
    const userRoles = member.guild.members.cache.get(member.id);
    if(!user) return;
    if(user.level <= 10 ) {
        userRoles.roles.add(newComer);
        userRoles.roles.remove(experienced);
        userRoles.roles.remove(expert);
        userRoles.roles.remove(professional);
        userRoles.roles.remove(legend);
      } else if(user.level > 10 && user.level <= 30 ) {
        userRoles.roles.remove(newComer);
        userRoles.roles.add(experienced);
        userRoles.roles.remove(expert);
        userRoles.roles.remove(professional);
        userRoles.roles.remove(legend);
      } else if(user.level > 30 && user.level <= 50 ) {
        userRoles.roles.remove(newComer);
        userRoles.roles.remove(experienced);
        userRoles.roles.add(expert);
        userRoles.roles.remove(professional);
        userRoles.roles.remove(legend);
      } else if(user.level > 50 && user.level <= 100 ) {
        userRoles.roles.remove(newComer);
        userRoles.roles.remove(experienced);
        userRoles.roles.remove(expert);
        userRoles.roles.add(professional);
        userRoles.roles.remove(legend);
      } else if(user.level > 100) {
        userRoles.roles.remove(newComer);
        userRoles.roles.remove(experienced);
        userRoles.roles.remove(expert);
        userRoles.roles.remove(professional);
        userRoles.roles.add(legend);
      } 
}