const apiKey = 'acc_63cfcf4159d22e3';
const apiSecret = 'e290f9816496219738ca3fb05a2a8dcf';

module.exports = {
    name: 'analyze',
    description: "analyze an image",
    usage: '<attach an image>',
    async execute(message, args, client, Discord, got) {
        const imageUrl = message.attachments.first().url;
        const url = 'https://api.imagga.com/v2/tags?image_url=' + encodeURIComponent(imageUrl);
        var used;
        var limit;
        var endDate;
        try {
            const usageResponse = await got('https://api.imagga.com/v2/usage', { username: apiKey, password: apiSecret });
            const usageObj = JSON.parse(usageResponse.body)
            used = usageObj.result.monthly_processed + 1;
            limit = usageObj.result.monthly_limit;
            endDate = usageObj.result.billing_period_end;
        } catch (error) {
            console.log(error.response.body);
        }
        if (used === limit) return message.channel.send({ content: `I am sorry but it looks like we have reached the monthly limit on the usage of the API please try again on ${endDate}` })
        try {
            const response = await got(url, { username: apiKey, password: apiSecret });
            const obj = JSON.parse(response.body)
            let embed = new Discord.MessageEmbed()
                .setTitle('Lets have a look..')
                .addFields(
                    { name: `**${obj.result.tags[0].tag.en}**`, value: `\`${Math.floor(obj.result.tags[0].confidence)}%\`` },
                    { name: `**${obj.result.tags[1].tag.en}**`, value: `\`${Math.floor(obj.result.tags[1].confidence)}%\`` },
                    { name: `**${obj.result.tags[2].tag.en}**`, value: `\`${Math.floor(obj.result.tags[2].confidence)}%\`` },
                    { name: `**${obj.result.tags[3].tag.en}**`, value: `\`${Math.floor(obj.result.tags[3].confidence)}%\`` },
                    { name: `**${obj.result.tags[4].tag.en}**`, value: `\`${Math.floor(obj.result.tags[4].confidence)}%\`` },
                )
                .setColor('#2F3136')
                .setImage(imageUrl)
                .setFooter(`Processed ${used}/${limit} images this month.`)
            message.channel.send({ embeds: [embed] })
        } catch (error) {
            console.log('error');
        }

    }
}