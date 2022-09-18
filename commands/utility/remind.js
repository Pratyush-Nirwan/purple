const ms = require("ms")
const db = require("quick.db")
module.exports = {
    name: 'remind',
    description: 'set reminders!',
    usage: '<time> <reason>',
    cooldown: '10',
    async execute(message, args, client, Discord) {
        let timeuser = args[0]
        let reason = args.slice(1).join(" ")

        if (!timeuser) return message.reply({content:":x: You should enter time 10m 10s 10d"})
        if (!reason) return message.reply({content:":x: You should enter reason"})

        db.set(`remind.${message.author.id}`, Date.now() + ms(timeuser))
        let set = new Discord.MessageEmbed()
            .setDescription(`**✅Reminder set**\n**Reason:** ${reason}\n **Will ring in** ${ms(ms(timeuser), { long: true })}`)
            .setColor('#2F3136')

        message.channel.send({embeds:[set]})
        const interval = setInterval(function () {

            if (Date.now() > db.fetch(`remind.${message.author.id}`)) {
                db.delete(`remind.${message.author.id}`)
                let dm = new Discord.MessageEmbed()
                    .setTitle('🔔Reminder')
                    .setDescription(`**Reason:** ${reason}`)
                    .setColor('#2F3136')
                message.author.send({content: `<@${message.author.id}>`, embeds:[dm]})
                    .catch(e => console.log(e))
                clearInterval(interval)
            }

        }, 1000)
    }
}