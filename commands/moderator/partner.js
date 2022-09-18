const auditLog = require("../../functions/auditLog");
module.exports = {
    name: 'partner',
    description:"This sends a partnership in the partnership channel.",
    usage: '<partner> <advertisement>',
    execute(message, args, client, Discord){
        if(!message.member.roles.cache.has('883602863287336960')) return message.delete();  
        
        const partnershipChannel = message.guild.channels.cache.get("789101400654217236");
        const pingRole= message.guild.roles.cache.get("796336572274311189");
        const partnerRole= message.guild.roles.cache.get("807286285446152232");
        const ping = message.guild.roles.cache.get("796336572274311189");
        
        const partner = message.mentions.members.first();
        if(!partner) return message.reply('Please mention the partner! follow this layout `p!partner <partner> <advertisement>`')
       	const partnerAd = args.slice(1).join(" ");
        
        const regex = /(https?:\/\/[^\s]+)/g;
		const urls = message.content.match(regex);
        if(!urls) return message.reply('No links found in the advertisement!')

        const embed = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setDescription(partnerAd+"\n\n *To partner with us read the pins in <#789101400654217236> and create a ticket in <#789101400654217236>.*")
    .setFooter(`Partnership approved by ${message.author.tag}`)
    partner.roles.add(partnerRole);
    partner.roles.add(pingRole);
    partnershipChannel.send({ content: `Partner: <@${partner.id}>\nThanks for partnering with us :heart: ${ping}\n`, embeds: [embed]})
    .then(sentEmbed => {
        const msgUrl = sentEmbed.url;
        const dmEmbed = new Discord.MessageEmbed()
	.setColor('#2F3136')
    .setTitle("Partnership posted!")
	.setDescription(`Your partnership was posted succesfully! you can check it our **[Here](${msgUrl})**\nThank you for partnering with us!:heart:`)
    .setFooter('Partnership approved by '+message.author.tag)
        client.users.cache.get(partner.id).send({embeds: [dmEmbed]});
    });
    partnershipChannel.send({ content: urls.join("\n")})
    auditLog.execute('🤝New Partnership created', `Partner- ${partner}\nApproved By- ${message.author}`, client, Discord)
    message.reply(`<@${message.author.id}> Partnership created successfully!`)
 }
}