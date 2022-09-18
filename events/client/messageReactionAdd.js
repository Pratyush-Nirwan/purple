module.exports = (Discord, client, reaction, user) => {
    const server = client.guilds.cache.get("776107860694007808");
    if (reaction.message.channel.id === "824684945250975774") {

        const submissionChannel = server.channels.cache.get('824684945250975774')
        const featuredChannel = server.channels.cache.get("824684976145432637");
        const discussionChannel = server.channels.cache.get("793142905727352852");
        submissionChannel.messages.fetch(reaction.message.id).then(msg => {
            const featuredPersonTag = msg.author.tag;
            const featuredPerson = msg.author;
            const submissionMessage = msg;
            const submissionMessageUrl = msg.attachments.first().url;

            let limit = 10;
            var msgUrl;
            if (reaction.emoji.name == '❤️' && !submissionMessage.reactions.cache.has("⭐") && reaction.count == limit) {
                submissionMessage.react("⭐");
                const featuredEmbed = new Discord.MessageEmbed()
                    .setTitle('Featured Photo')
                    .setColor('#2F3136')
                    .setDescription('Photo by ' + featuredPersonTag)
                    .setImage(submissionMessageUrl)
                    .setFooter('Photos sent in #📸︱submissions that get ' + limit + ' or more ❤️ reactions get featured here.')
                featuredChannel.send({ embeds: [featuredEmbed] }).then(sentEmbed => {
                    msgUrl = sentEmbed.url;
                    const dmEmbed = new Discord.MessageEmbed()
                        .setColor('#2F3136')
                        .setDescription('**This photo you sent got featured!**\nYou can check it out [Here](' + msgUrl + ')\nCongratulations on the feature:heart:')
                        .setImage(submissionMessageUrl);

                    const discussionEmbed = new Discord.MessageEmbed()
                        .setColor('#2F3136')
                        .setDescription('**Photo sent by ' + featuredPersonTag + ' got featured!**\nCheck it out [Here](' + msgUrl + ')')
                    
                        try {
                            featuredPerson.send({ embeds: [dmEmbed] }).catch(()=>{return;})
                        } catch (error) {
                            return;
                        }
                        
                    discussionChannel.send({ embeds: [discussionEmbed] });
                })
            }
            if (reaction.emoji.name == '💬' && user.id === featuredPerson.id) {
                submissionMessage.reactions.resolve('💬').users.remove(user.id);
            }
            if (reaction.emoji.name == '💬' && user.id !== '807568597370667028' && user.id !== featuredPerson.id) {
                submissionMessage.reactions.resolve('💬').users.remove(user.id);
                const requestEmbed = new Discord.MessageEmbed()
                    .setTitle('Discussion Request!')
                    .setColor('#2F3136')
                    .setDescription(`Photo by ${featuredPersonTag}\nCheck it out [Here](${submissionMessage.url}) in <#824684945250975774>`)
                    .setImage(submissionMessageUrl)

                discussionChannel.send({ content: `<@${featuredPerson.id}>, <@${user.id}> wants to talk about a photo you sent!`, embeds: [requestEmbed] })
            }
        })
    }
}