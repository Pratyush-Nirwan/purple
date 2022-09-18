const canvacord = require("canvacord");
const { Console } = require("console");
const db = require("quick.db")
module.exports = {
    preview(message) {
        let preview;
        let bgColor = db.fetch(`rankcardbg.${message.author.id}`)
        let lbColor = db.fetch(`rankcardlb.${message.author.id}`)
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
        const rank = new canvacord.Rank()
        .setAvatar(message.author.displayAvatarURL({format: 'png'}))
        .setCurrentXP(4000)
        .setRequiredXP(5100)
        .setLevel(25)
        .setRank(5)
        .setStatus(message.member.presence.status, true)
        .setProgressBar(lbColor, 'COLOR', true)
        .setUsername(message.author.username)
        .setDiscriminator(message.member.discriminator)
        .renderEmojis(true)
        .setBackground('COLOR', bgColor)
        .setOverlay('#2F3136', 0.5, false)
    rank.build()
        .then(data => {
            const attachment = new Discord.MessageAttachment(data, `rank.png`);
            preview = attachment;
            console.log(attachment)
        })
        return preview;
    }
  }