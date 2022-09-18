const { inspect } = require('util')
module.exports = {
    name: 'eval',
    async execute(message, args, client, Discord) {
        if (message.author.id != "727559089835737150") return;
        try {

            const code = args.slice().join(" ");
            let evaled = await eval(code)
            if (typeof evaled !== "string") evaled = inspect(evaled);
                const output = evaled.match(/(.|[\r\n]){1,4000}/g);;
                output.forEach(block =>{
                    let embed = new Discord.MessageEmbed()
                .setDescription(`\`\`\`js\n${block}\`\`\``)
                .setColor('#2F3136')
                message.channel.send({embeds: [embed]})
                })
                
        } catch (err) {

            message.channel.send({ content: `\`ERROR\` \`\`\`xl\n${err}\n\`\`\``})
        }
    }
}