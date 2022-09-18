const moment = require('moment');
module.exports = async(Discord, client , member) => {

    //Log the leaving.
    const logChannel = client.channels.cache.get('795341098532077618');
    const logembed = new Discord.MessageEmbed()
    .setTitle('Left')
    .setColor("RED")
    .setThumbnail(`${member.user.displayAvatarURL({
        format: 'jpg'})}`)
    .addField(`${member.user.tag}`, `${member}`)
    .addField("ID:", `\`${member.id}\``, true)
    .addField("Joined The Server On:", `\`${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}\``, true)
    logChannel.send({embeds:[logembed]});
}
