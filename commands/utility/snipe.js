const fs = require('fs')
module.exports = {
    name: 'snipe',
    description: "get the most recent deleted message.",
    async execute(message, args, client, Discord){
        try {
            const data = fs.readFileSync('./log/snipe.txt', 'utf8').split('\n');
            const pfp = client.users.cache.get(data[4]).displayAvatarURL({format: 'jpg'})
            let embed = new Discord.MessageEmbed()
            .setTitle(`You got sniped ${data[3]}!`)
            .setDescription(`Message sent in <#${data[1]}>`)
            .setThumbnail(pfp)
            .addField(`Message:`, data[2])
            .setTimestamp()
            .setColor('6F2AAB')

        await message.channel.send({content: `<@${data[4]}>`, embeds:[ embed]})
        } catch (err) {
            console.error(err)
        }
  } 
}