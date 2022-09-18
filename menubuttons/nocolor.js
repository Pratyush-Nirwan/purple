module.exports.run = async (Discord, button) => {
    const red = button.member.guild.roles.cache.get('826519681875050507');
    const darkRed = button.member.guild.roles.cache.get('826519893146730576');
    const pink = button.member.guild.roles.cache.get('826520133878415440');
    const darkPink = button.member.guild.roles.cache.get('826520264787099649');
    const orange = button.member.guild.roles.cache.get('826520435092750437');
    const darkOrange = button.member.guild.roles.cache.get('826520642764668949');
    const yellow = button.member.guild.roles.cache.get('826520787551912006');
    const darkYellow = button.member.guild.roles.cache.get('826521004192170045');
    const green = button.member.guild.roles.cache.get('826521174393094174');
    const darkGreen = button.member.guild.roles.cache.get('826521303078404188');
    const blue = button.member.guild.roles.cache.get('826521487938420800');
    const darkBlue = button.member.guild.roles.cache.get('826521729463353437');
    const purple = button.member.guild.roles.cache.get('826521880072159283');
    const darkPurple = button.member.guild.roles.cache.get('826522035394969622');
    button.deferUpdate();

    button.member.roles.remove(red);
    button.member.roles.remove(darkRed);
    button.member.roles.remove(pink);
    button.member.roles.remove(darkPink);
    button.member.roles.remove(orange);
    button.member.roles.remove(darkOrange);
    button.member.roles.remove(yellow);
    button.member.roles.remove(darkYellow);
    button.member.roles.remove(green);
    button.member.roles.remove(darkGreen);
    button.member.roles.remove(blue);
    button.member.roles.remove(darkBlue);
    button.member.roles.remove(purple);
    button.member.roles.remove(darkPurple);
    let embed = new Discord.MessageEmbed()
        .setColor('WHITE')
        .setDescription(`Removed color role.`);

    button.member.send({ content: `<@${button.member.id}>`, embeds: [embed] })
}