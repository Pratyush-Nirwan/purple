module.exports = {
    async execute(message, client, Discord) {
        if (message.attachments.size = 0) return;
        const channel = client.channels.cache.get('893054924479414322');
        const role = message.guild.roles.cache.get('893055026942050334');
        message.attachments.forEach(attachment => {
            const link = new URL(attachment.url);
            const rawResult = link.pathname;
            const filename = rawResult.substring(51)

           const result = isSus(filename);

           if(result.susPoints >= 1){
               const embed = new Discord.MessageEmbed()
               .setTitle('Suspicious Photo Detected🚨')
               .setColor('RED')
               .setDescription(`**[Go to the message](${message.url})**`)
               .addFields(
                {name: 'File Name:', value: `\`${filename}\``},
                {name: 'Sent By:', value: `<@${message.author.id}>`},

                {name: 'With Reason(s):', value: `${result.reason}`},
                {name:'Suspicion Level:', value: `${result.susPoints}`}
              )
              .setImage(attachment.url)

              channel.send({content: `${role}`,embeds: [embed]})
           }
        });

        function isSus(filename) {
            const lowerCaseFilename = filename.toLowerCase();
            var susPoints = 0;
            var reasons = [];

            const _ch = '_';
            const _count = filename.split(_ch).length - 1;

            if (_count > 2) {
                susPoints++;
                reasons.push('•Too many underscores');
            }

            const dashch = '-';
            const dashcount = filename.split(dashch).length - 1;

            if (dashcount >= 1) {
                susPoints++;
                reasons.push('•Too many dashes');
            }

            if (filename.length >= 20) {
                susPoints++
                reasons.push('•Name is too long');
            }

            if(lowerCaseFilename.includes('download') || lowerCaseFilename.includes('unknown') || lowerCaseFilename.includes('free') || lowerCaseFilename.includes('google') || lowerCaseFilename.includes('royalty') || lowerCaseFilename.includes('online') || lowerCaseFilename.includes('screenshot')){
                susPoints ++;
                reasons.push('•Contains Suspicious words');
            }

            const reason = reasons.join('\n');
            return {
                susPoints,
                reason
            };
        }
    }
}