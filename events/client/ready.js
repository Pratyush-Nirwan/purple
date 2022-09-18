const memberCounter = require('../../counters/member-counter');
const Levels = require("discord-xp");
const rndmmsg = require('../../counters/rndmmsg');
const introCommands = require('../../functions/introCommands')
var clc = require("cli-color");
const activities_list = [
    "over The Photographer's Support", 
    "p!help",
    "with version-2.3.0"
    ];
const type_list = [
    "WATCHING", 
    "LISTENING",
    "PLAYING"
    ];

module.exports =  async (Discord, client, message) => {

    guild = client.guilds.cache.get("776107860694007808");
    introCommands(client, Discord, guild);
    
    console.log('Caching messages.')
    guild.channels.cache.forEach(channel => {
        if(channel.id === "824684945250975774"){
            channel.messages.fetch({
                limit:100
            }).then(messages => { 
            messages.forEach(msg =>{
                if(msg.attachments.size === 0) {
                    msg.delete();
                    return;
                }
                if(!msg.reactions.cache.has('❤️')){
                    msg.react('❤️');
                }
                if(!msg.reactions.cache.has('💬')){
                    msg.react('💬');
                }
                if(msg.reactions.cache.get('❤️' ).count >= 10 && !msg.reactions.cache.has('⭐')){
                msg.react("⭐");
        const server = client.guilds.cache.get("776107860694007808");
        const featuredChannel = server.channels.cache.get("824684976145432637");
        const discussionChannel = server.channels.cache.get("793142905727352852");            
		const featuredEmbed = new Discord.MessageEmbed()
	.setTitle('Featured Photo')
    .setColor('#2F3136')    
    .setDescription('Photo by '+msg.author.tag)
	.setImage(msg.attachments.first().url)
    .setFooter('Photos sent in #⭐︱featured that get 10 or more ❤️ reactions get featured here.') 
        featuredChannel.send({embeds:[featuredEmbed]}).then(sentEmbed => {
			 let msgUrl = sentEmbed.url;
            const dmEmbed = new Discord.MessageEmbed()
    .setColor('#2F3136')    
    .setDescription('**This photo you sent got featured!**\nYou can check it out [Here]('+msgUrl+')\nCongratulations on the feature:heart:')
	.setImage(msg.attachments.first().url);
            const discussionEmbed = new Discord.MessageEmbed()
    .setColor('#2F3136')    
    .setDescription('**Photo sent by '+msg.author.tag+' got featured!**\nCheck it out [Here]('+msgUrl+')')
    msg.author.send({embeds:[dmEmbed]});        
	discussionChannel.send({embeds:[discussionEmbed]});
        })
            		}
            	}
           )});
            console.log('messages cached')
        }}); 

    console.log('Computing leaderBoard')
    const rawLeaderboard = await Levels.fetchLeaderboard(guild.id, guild.memberCount);
        global.leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);
    console.log('Leaderboard computed!')    
    setInterval(async() => {
        const rawLeaderboard = await Levels.fetchLeaderboard(guild.id, guild.memberCount);
        leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);
    },30*60*1000)
     setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length)); 
        client.user.setActivity(activities_list[index], {type : type_list[index]}); 
    }, 10000);
    setInterval(async () =>{
    const rawLeaderboard = await Levels.fetchLeaderboard(guild.id, 10);
    
    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

    const top10leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);
    const lb = top10leaderboard.map(e =>`**${e.position}. ${e.username}#${e.discriminator}**\n*Level:* \`${e.level}\`\n*XP:* \`${e.xp.toLocaleString()}\``); // We map the outputs.
    let lbEmbed = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('LeaderBoard')
    .setThumbnail('https://i.imgur.com/o33YG8M.png')
    .setDescription(lb.join('\n\n'))
	.setTimestamp()

        const leaderboardMsg = client.channels.cache.get("837385526515859506").messages.fetch("951124281738297354").then(msg => {
            msg.edit({embeds:[lbEmbed]});
        })
    }, 10000)
  memberCounter(client);
  let random = Math.floor(Math.random() * 20);
  if (random === 16){
    client.channels.cache.get('788872012884869181').send({content:'**I am reborn.**'});
  }
  rndmmsg(client, Discord);
}

    console.log(`Purple Bot is ${clc.green(`online`)}`);
