module.exports.run = async (Discord, button) => {
    const role = button.member.guild.roles.cache.get('809827070507089940');
    button.deferUpdate();
    if (button.member.roles.cache.has(role.id)) {
        button.member.roles.remove(role)

        let embed = new Discord.MessageEmbed()
            .setColor(role.hexColor)
            .setDescription(`**${role.name}** role removed.`);

        button.member.send({content:`<@${button.member.id}>`, embeds: [embed]}).catch(()=>{return;})
    } else {
        button.member.roles.add(role)

        let embed = new Discord.MessageEmbed()
            .setColor(role.hexColor)
            .setDescription(`**${role.name}** role added.`);

        button.member.send({content:`<@${button.member.id}>`, embeds: [embed]}).catch(()=>{return;})
    }
}