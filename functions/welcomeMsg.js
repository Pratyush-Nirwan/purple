const fs = require('fs');
let welcome_data = fs.readFileSync('./welcomemessages.txt').toString();
let welcome = welcome_data.split(`\n`)
const superagent = require('superagent');

module.exports = {
    name: 'welcomeMsg',
    async execute(Discord, client, member){

        const guild = client.guilds.cache.get("776107860694007808");
        const name = member;
        let random = Math.floor(Math.random() * welcome.length-1);
    
        const response = await superagent.get(`https://g.tenor.com/v1/random?q=welcome_to&key=${process.env.TENOR_KEY}&limit=8`);
    const welcomeChannel = client.channels.cache.get('788872012884869181');
    let welcomeEmbed = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setThumbnail(`${member.user.displayAvatarURL({
        format: 'jpg'
})}`)
    .setDescription(`${welcome[random].replaceAll('${name}', `**${name}**`)}\n\nRules:- <#776140199829831733>\nRoles:- <#776301149271752734>`)
    .setImage(response._body.results[0].media[0].tinygif.url)
    welcomeChannel.send({content: `<@${member.id}> <@&807300281476972564>`, embeds:[welcomeEmbed]})
    }  

    
}