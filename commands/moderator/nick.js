module.exports = {
    name: 'nick',
    description:"Change the nickname of someone.",
    usage: '<userid/mention> (nickname)',
    execute(message, args, client, Discord){
        if(!message.member.roles.cache.get('776110194266210354')) return message.delete();  
        var description;
        var id;
        if(!message.mentions.users.first()){
            id = args[0];
        } else {
            id = message.mentions.users.first().id;
        }
       	var fname = args.slice(1).join(" ");
           if(!fname){
               fname = Date.now();
               description = 'Moderated Nickname ';
           } else {
               description = ' ';
           }
        var member = message.guild.members.cache.get(id);
		if(!member) {
            let embed = new Discord.MessageEmbed()
	.setColor('RED')
    .setTitle('Error!')
	.setDescription('No member found!')
	message.channel.send({embeds: [embed]})
        } else {
		member.setNickname(`${description}${fname}`);
		let embed = new Discord.MessageEmbed()
	.setColor('#2F3136')
    .setTitle('Done!')
	.setDescription(`Set nickname to ${description}${fname}`)   
	
    
    let dmembed = new Discord.MessageEmbed()
	.setColor('#2F3136')
    .setTitle("Nickname changed in Photographer's Support")
	.setDescription(`Your nickname has been changed to\n**${description}${fname}** \nin Photographer's Support.\nIt happened either because your Username is inappropriate\n **or** \nHas too many off-keyboard characters making it hard to mention you.\nIf you want you can still change your nickname to a simple and appropriate one.`)
    .setThumbnail('https://i.imgur.com/0ZzqNC5.jpg')
    .setTimestamp()    
    .setFooter("The Photographer's Support")
	message.channel.send({embeds: [embed]})
    try {
        member.send({embeds: [dmembed]}).catch(()=>{return;})
    } catch (error) {
        return;
    }
        }        
 }
}