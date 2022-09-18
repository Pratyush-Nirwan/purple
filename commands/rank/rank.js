const Levels = require("discord-xp");
const db = require("quick.db")
const canvacord = require("canvacord")
module.exports = {
    name: 'rank',
    description:"know your rank in the server!",
    usage: '(person)',
    async execute(message, args, client, Discord){
        if(!global.leaderboard) return message.reply('This command is not available right now, Please try again in a few minutes.')
        const {guild} = message; 
        const target = message.mentions.members.first() || message.guild.members.cache.get(message.author.id);
        const user = await Levels.fetch(target.id, message.guild.id);
        if (!user) return message.channel.send({content:"Seems like this user has not earned any xp so far."});

        let bgColor = db.fetch(`rankcardbg.${target.id}`)
        let lbColor = db.fetch(`rankcardlb.${target.id}`)
        if(!bgColor){
            bgColor = '#232323';
        }
        if(!lbColor){
            lbColor = '#FFFFFF';
        }

        if(bgColor === 'RANDOM'){
            bgColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
        }
        if(lbColor === 'RANDOM'){
            lbColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
        }
        const XPforNextLevel = Levels.xpFor(user.level + 1);
        const XPforCurrentLevel = Levels.xpFor(user.level);
        const XPPercent = Math.floor(((user.xp - XPforCurrentLevel)/(XPforNextLevel - XPforCurrentLevel))*100)
        const position = leaderboard.find((e)=>e.username === target.user.username).position;
        if(target.presence == null){
            presence = 'offline';
        } else {
            presence = target.presence.status
        }
        const rank = new canvacord.Rank()
            .setAvatar(target.user.displayAvatarURL({format: 'png'}))
            .setCurrentXP(user.xp - XPforCurrentLevel)
            .setRequiredXP(XPforNextLevel - XPforCurrentLevel)
            .setLevel(user.level)
            .setRank(position)
            .setStatus(presence, true)
            .setProgressBar(lbColor, 'COLOR', true)
            .setUsername(target.user.username)
            .setDiscriminator(target.user.discriminator)
            .renderEmojis(true)
            .setBackground('COLOR', bgColor)
            .setOverlay('#2F3136', 0.5, false)
        rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, `rank.png`);
                message.channel.send({files: [attachment]})
            })
 }
}