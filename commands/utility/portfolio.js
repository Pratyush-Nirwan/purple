const fs = require('fs')
const { MessageButton, MessageActionRow, MessageSelectMenu, ButtonInteraction, Interaction } = require('discord.js');
const auditLog = require("../../functions/auditLog")
module.exports = {
    name: 'portfolio',
    description: "create your own portfolio channel. (only for server boosters) ",
    usage: '',
    async execute(message, args, client, Discord) {

        if (!message.member.roles.cache.has('798223892866400288') && !message.member.roles.cache.has('803630798787838003') ) return message.channel.send({ content: 'You need to be a server booster to use this command.' });
        const portfolio_category = guild.channels.cache.get('940641544262799408');
        const members = guild.roles.cache.get('776321406497456148');
        const everyone = guild.roles.cache.get('776107860694007808');
        if (message.guild.channels.cache.find(channel => channel.parentId === portfolio_category.id && channel.topic.includes(`Portfolio ID: ${message.author.id}`))) {
            var portfolio = message.guild.channels.cache.find(channel => channel.parentId === portfolio_category.id && channel.topic.includes(`Portfolio ID: ${message.author.id}`));

            const panel = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setLabel('♻️Purge Portfolio')
                        .setStyle('DANGER')
                        .setCustomId('portfolio_purge'),

                    new MessageButton()
                        .setLabel('🗑️Delete Portfolio')
                        .setStyle('DANGER')
                        .setCustomId('portfolio_delete'),

                    new MessageButton()
                        .setLabel('📄Reset Portfolio Name')
                        .setStyle('SUCCESS')
                        .setCustomId('portfolio_reset_name')
                )

            var panel_embed = new Discord.MessageEmbed()
                .setDescription(`**${message.author.username}'s Portfolio Management Panel**\n\n**Portfolio:** <#${portfolio.id}>\n**Portfolio ID:** ${message.author.id}\n\n**Here you can manage your portfolio easily!**\n\n__**♻️Purge Portfolio:**__ Recreates your portfolio *(Deletes all the message that are currently in your portfolio.)*\n\n__**🗑️Delete Portfolio:**__ Deletes your portfolio.\n\n__**📄Reset Portfolio Name:**__ Changes your portfolio's name to your current username.`)
                .setColor('#2F3136')
                .setFooter({ text: 'Please be carefull while clicking the buttons, changes are not reversible.' })

            message.channel.send({ embeds: [panel_embed], components: [panel] }).then(msg => {
                const panel_filter = (interaction) => {
                    interaction.deferUpdate();
                    if (interaction.user.id === message.author.id) return true;
                    return false;
                }
                const cmd_filter = (cmd_msg) => {
                    if (cmd_msg.author.id === message.author.id) return true;
                    return;
                }

                const panelcollector = message.channel.createMessageComponentCollector({ panel_filter });

                const cmdcollector = message.channel.createMessageCollector({ cmd_filter })
                cmdcollector.on('collect', (cmdmsg) => {
                    if (cmdmsg.content === 'p!portfolio') {
                        panelcollector.stop();
                        cmdcollector.stop();
                    }
                })
                panelcollector.on('collect', (ButtonInteraction) => {
                    if (ButtonInteraction.user.id != message.author.id) return;
                    if (ButtonInteraction.customId === 'portfolio_purge') {

                        ButtonInteraction.deferUpdate();

                        const temp_panel = new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                    .setLabel('YES')
                                    .setStyle('SUCCESS')
                                    .setCustomId('portfolio_yes'),

                                new MessageButton()
                                    .setLabel('NO')
                                    .setStyle('DANGER')
                                    .setCustomId('portfolio_no'),
                            )

                        message.channel.send({ content: "Are you sure you want to purge your portfolio?\nThis will delete all the messages that are currently in your portfolio.", components: [temp_panel] }).then(yesno_msg => {
                            const temp_collector = message.channel.createMessageComponentCollector({ panel_filter });

                            temp_collector.on('collect', (tempInteraction) => {
                                if (tempInteraction.customId === 'portfolio_yes') {
                                    if (tempInteraction.user.id != message.author.id) return;
                                    portfolio.delete();

                                    guild.channels.create(`${message.author.username}-portfolio`, {
                                        parent: portfolio_category,
                                        type: 'text',
                                    }).then(channel => {
                                        channel.permissionOverwrites.create(message.author, {
                                            SEND_MESSAGES: true,
                                            ATTACH_FILES: true,
                                            EMBED_LINKS: true,
                                        })
                                        channel.permissionOverwrites.create(members, {
                                            VIEW_CHANNEL: true,
                                            SEND_MESSAGES: false,
                                            ADD_REACTIONS: true,
                                            READ_MESSAGE_HISTORY: true,
                                            CREATE_PUBLIC_THREADS: false,
                                            CREATE_PRIVATE_THREADS: false,
                                        })
                                        channel.permissionOverwrites.create(everyone, {
                                            VIEW_CHANNEL: false
                                        })
                                        const portfolio_created_date = new Date(Date.now()).toLocaleDateString();
                                        channel.setTopic(`Portfolio Owner: <@${message.author.id}>\nDate Created: ${portfolio_created_date}\nPortfolio ID: ${message.author.id}`);
                                        try {
                                            if(message.channel.id === portfolio.id) return;
                                            yesno_msg.delete();
                                            message.channel.send("Your portfolio has been purged ♻️").then(temp_msg => {
                                                setTimeout(() => temp_msg.delete(), 5000)
                                            })
                                                .catch()
                                            panel_embed = new Discord.MessageEmbed()
                                                .setDescription(`**${message.author.username}'s Portfolio Management Panel**\n\n**Portfolio:** <#${channel.id}>\n**Portfolio ID:** ${message.author.id}\n\n**Here you can manage your portfolio easily!**\n\n__**♻️Purge Portfolio:**__ Recreates your portfolio *(Deletes all the message that are currently in your portfolio.)*\n\n__**🗑️Delete Portfolio:**__ Deletes your portfolio.\n\n__**📄Reset Portfolio Name:**__ Changes your portfolio's name to your current username.`)
                                                .setColor('#2F3136')
                                                .setFooter({ text: 'Please be carefull while clicking the buttons, changes are not reversible.' })
                                            msg.edit({ embeds: [panel_embed], components: [panel] })
                                        } catch (error) {
                                            console.log(error)
                                        }
                                        auditLog.execute('♻️Portfolio Purged', `<@${message.author.id}> purged their portfolio!\nPortfolio: <#${channel.id}>`, client, Discord);
                                    })
                                    temp_collector.stop();
                                    
                                }
                                if (tempInteraction.customId === 'portfolio_no') {
                                    if (tempInteraction.user.id != message.author.id) return;
                                    yesno_msg.delete();
                                    temp_collector.stop();
                                }
                            })
                        })

                    }
                    if (ButtonInteraction.customId === 'portfolio_delete') {
                        ButtonInteraction.deferUpdate();

                        const temp_panel = new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                    .setLabel('YES')
                                    .setStyle('SUCCESS')
                                    .setCustomId('portfolio_yes'),

                                new MessageButton()
                                    .setLabel('NO')
                                    .setStyle('DANGER')
                                    .setCustomId('portfolio_no'),
                            )

                        message.channel.send({ content: 'Are you sure you want to delete you portfolio?', components: [temp_panel] }).then(yesno_msg => {
                            const temp_collector = message.channel.createMessageComponentCollector({ panel_filter });

                            temp_collector.on('collect', (tempInteraction) => {
                                if (tempInteraction.customId === 'portfolio_yes') {
                                    if (tempInteraction.user.id != message.author.id) return;
                                    panelcollector.stop();
                                    yesno_msg.delete();
                                    const trash_channel = message.guild.channels.cache.find(channel => channel.parentId === portfolio_category.id && channel.topic.includes(`Portfolio ID: ${message.author.id}`));
                                    trash_channel.delete();
                                    try {
                                        panel_embed = new Discord.MessageEmbed()
                                            .setDescription(`**${message.author.username}'s Portfolio Management Panel**\n\n You have deleted your Portfolio!🗑️\nPlease run \`p!portfolio\` if you want to create your portfolio again.`)
                                            .setColor('#2F3136')
                                        if(message.channel.id == trash_channel.id) return;
                                        msg.edit({ embeds: [panel_embed], components: [] })
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    temp_collector.stop();
                                    auditLog.execute('🗑️Portfolio Deleted', `<@${message.author.id}> deleted their portfolio!`, client, Discord);
                                }
                                if (tempInteraction.customId === 'portfolio_no') {
                                    if (tempInteraction.user.id != message.author.id) return;
                                    yesno_msg.delete();
                                    temp_collector.stop();
                                }
                            })
                        })

                    }
                    if (ButtonInteraction.customId === 'portfolio_reset_name') {
                        ButtonInteraction.deferUpdate();
                        const old_name_channel = message.guild.channels.cache.find(channel => channel.parentId === portfolio_category.id && channel.topic.includes(`Portfolio ID: ${message.author.id}`));
                        old_name_channel.setName(`${message.author.username}-portfolio`)
                        try {
                            message.channel.send("Your portfolio name has been reset📄").then(temp_msg => {
                                setTimeout(() => temp_msg.delete(), 5000)
                            })
                                .catch()
                            panel_embed = new Discord.MessageEmbed()
                                .setDescription(`**${message.author.username}'s Portfolio Management Panel**\n\n**Portfolio:** <#${portfolio.id}>\n**Portfolio ID:** ${message.author.id}\n\n**Here you can manage your portfolio easily!**\n\n__**♻️Purge Portfolio:**__ Recreates your portfolio *(Deletes all the message that are currently in your portfolio.)*\n\n__**🗑️Delete Portfolio:**__ Deletes your portfolio.\n\n__**📄Reset Portfolio Name:**__ Changes your portfolio's name to your current username.`)
                                .setColor('#2F3136')
                                .setFooter({ text: 'Please be carefull while clicking the buttons, changes are not reversible.' })
                            msg.edit({ embeds: [panel_embed], components: [panel] })
                        } catch (error) {
                            console.log(error)
                        }
                        auditLog.execute('📄Portfolio Name Reset', `<@${message.author.id}> purged their portfolio!\nPortfolio: <#${old_name_channel.id}>`, client, Discord);
                    }
                })

            })
            return;
        }

        const menu1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('YES')
                    .setStyle('SUCCESS')
                    .setCustomId('portfolio_yes'),

                new MessageButton()
                    .setLabel('NO')
                    .setStyle('DANGER')
                    .setCustomId('portfolio_no')
            )

        panel_embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}'s Portfolio Management Panel**\n\nWelcome to your Portfolio Management Panel <@${message.author.id}>!\nIt looks like you haven't created a portfolio yet.\nBut as a server booster, you can create a portfolio for yourself!🥳\n\nDo you want to create a portfolio?`)
            .setColor('#2F3136')

        message.channel.send({ components: [menu1], embeds: [panel_embed] }).then(msg => {
            const filter = (interaction) => {
                interaction.deferUpdate();
                if (interaction.user.id === message.author.id) return true;
                return false;
            }

            const menucollector = message.channel.createMessageComponentCollector({ filter, max: 1 })

            menucollector.on('end', (ButtonInteraction) => {
                if (ButtonInteraction.first().customId === 'portfolio_no') {
                    const menu_denied = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setLabel('YES')
                                .setStyle('SUCCESS')
                                .setCustomId('portfolio_yes')
                                .setDisabled(true),

                            new MessageButton()
                                .setLabel('NO')
                                .setStyle('SECONDARY')
                                .setCustomId('portfolio_no')
                                .setDisabled(true),
                        )
                    msg.edit({ components: [menu_denied] });
                }
                if (ButtonInteraction.first().customId === 'portfolio_yes') {
                    const menu_accepted = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setLabel('YES')
                                .setStyle('SECONDARY')
                                .setCustomId('portfolio_yes')
                                .setDisabled(true),

                            new MessageButton()
                                .setLabel('NOT')
                                .setStyle('DANGER')
                                .setCustomId('portfolio_no')
                                .setDisabled(true),
                        )
                    msg.edit({ components: [menu_accepted] });

                    const menu2 = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setLabel('Accept')
                                .setStyle('SUCCESS')
                                .setCustomId('portfolio_accept'),

                            new MessageButton()
                                .setLabel('Deny')
                                .setStyle('DANGER')
                                .setCustomId('portfolio_deny')
                        )

                    const tcrEmbed = new Discord.MessageEmbed()
                        .setDescription(`**🚨Terms and conditons**\n\n•All the server rules apply in the portfolio.\n•If you stop boosting the server your portfolio will be hidden and will be deleted after a month if you don't boost the server again.\n•If your portfolio is inactive for more than a month it may get deleted.\n•If you leave the server your portfolio will get deleted.\n\n Do you accept these terms and conditons?`)
                        .setColor('#2F3136')

                    message.channel.send({ components: [menu2], embeds: [tcrEmbed] }).then(tcr_msg => {
                        const panel_filter = (interaction) => {
                            interaction.deferUpdate();
                            if (interaction.user.id === message.author.id) return true;
                            return false;
                        }
                        const tcr_collector = message.channel.createMessageComponentCollector({ panel_filter });

                        tcr_collector.on('collect', (tcrInteractiom) => {

                            if (tcrInteractiom.user.id != message.author.id) return;

                            if (tcrInteractiom.customId === 'portfolio_accept') {
                                tcrInteractiom.deferUpdate()

                                const menu2_accepted = new MessageActionRow()
                                    .addComponents(
                                        new MessageButton()
                                            .setLabel('Accept')
                                            .setStyle('SECONDARY')
                                            .setCustomId('portfolio_accept')
                                            .setDisabled(true),

                                        new MessageButton()
                                            .setLabel('Deny')
                                            .setStyle('DANGER')
                                            .setCustomId('portfolio_deny')
                                            .setDisabled(true)
                                    )
                                tcr_msg.edit({components: [menu2_accepted]});

                                guild.channels.create(`${message.author.username}-portfolio`, {
                                    parent: portfolio_category,
                                    type: 'text',
                                }).then(channel => {
                                    channel.permissionOverwrites.create(message.author, {
                                        SEND_MESSAGES: true,
                                        ATTACH_FILES: true,
                                        EMBED_LINKS: true,
                                    })
                                    channel.permissionOverwrites.create(members, {
                                        VIEW_CHANNEL: true,
                                        SEND_MESSAGES: false,
                                        ADD_REACTIONS: true,
                                        READ_MESSAGE_HISTORY: true,
                                        CREATE_PUBLIC_THREADS: false,
                                        CREATE_PRIVATE_THREADS: false,
                                    })
                                    channel.permissionOverwrites.create(everyone, {
                                        VIEW_CHANNEL: false
                                    })
                                    const portfolio_created_date = new Date(Date.now()).toLocaleDateString();
                                    channel.setTopic(`Portfolio Owner: <@${message.author.id}>\nDate Created: ${portfolio_created_date}\nPortfolio ID: ${message.author.id}`);

                                    channelEmbed = new Discord.MessageEmbed()
                                        .setDescription(`**Welcome!🙏**\n\nThis is your very own portfolio ${message.author.username}!🥳\n\n You can send photos, videos, your social media links or anything you like here!\n Its just like an account!🤩\n\n You can do \`p!portfolio\` to open your Portfolio Mangement Panel!`)
                                        .setColor('#2F3136')

                                    channel.send({embeds:[channelEmbed], content:`<@${message.author.id}>`}).then(channelmsg => {
                                        channelmsg.pin()
                                    })
                                    message.channel.send({ content: `Congratulations! <@${message.author.id}>Your portfolio has been created! go to <#${channel.id}>` });
                                    auditLog.execute('✨Portfolio Created', `<@${message.author.id}> created their portfolio!\nPortfolio: <#${channel.id}>`, client, Discord);
                                })
                                tcr_collector.stop()
                            }
                            if(tcrInteractiom.customId === 'portfolio_deny'){
                                tcr_msg.delete();
                                tcr_collector.stop();
                            }
                        })
                    })
                }
            })
        })

    }
}

