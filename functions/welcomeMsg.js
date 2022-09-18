const fs = require('fs');
let welcome_data = fs.readFileSync('./welcomemessages.txt').toString();
let welcome = welcome_data.split(`\n`)
module.exports = {
    name: 'welcomeMsg',
    async execute(Discord, client, member){
        const guild = client.guilds.cache.get("776107860694007808");
        const name = member;
        let random = Math.floor(Math.random() * welcome.length-1);
        let welcomeMsg = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setTitle('Welcome!')
        .setDescription(welcome[random].replaceAll('${name}', `**${name}**`))
        .setThumbnail(`${member.user.displayAvatarURL({
            format: 'jpg'
    })}`)
        console.log(name.username)
        client.channels.cache.get('788872012884869181').send({content: `<@&807300281476972564>`, embeds:[ welcomeMsg]})
    
    }  
}