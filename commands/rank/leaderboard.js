const Levels = require("discord-xp");
module.exports = {
    name: 'leaderboard',
    description:"This sends the current leaderboard",
    async execute(message, args, client, Discord){
        if(!message.member.roles.cache.has('776109191181893673')||!message.member.roles.cache.has('806113107235569664')||!message.member.roles.cache.has('776110194266210354')) return message.delete();
        message.delete();
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.
if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");
const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.
const lb = leaderboard.map(e =>`**${e.position}. ${e.username}#${e.discriminator}**\n*Level:* \`${e.level}\`\n*XP:* \`${e.xp.toLocaleString()}\``); // We map the outputs.
let lbEmbed = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('LeaderBoard')
    .setDescription(lb.join('\n\n'))
	.setTimestamp()
    message.channel.send({content:'https://i.imgur.com/j493riE.png'})
    message.channel.send({ embeds: [lbEmbed]})
 }
}