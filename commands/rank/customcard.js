const db = require("quick.db")
const { MessageButton, MessageActionRow, MessageSelectMenu, ButtonInteraction } = require('discord.js')
module.exports = {
    name: 'customcard',
    description: "customize your rank card!",
    async execute(message, args, client, Discord) {
        const menu1embed = new Discord.MessageEmbed()
            .setDescription('What do you want to customise in your rank card?')
            .setColor('#2F3136');

        const menu1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Background')
                    .setStyle('PRIMARY')
                    .setCustomId('rankcard_background'),

                new MessageButton()
                    .setLabel('Level Bar')
                    .setStyle('PRIMARY')
                    .setCustomId('rankcard_levelbar')
            )
        message.channel.send({ components: [menu1], embeds: [menu1embed] }).then(msg => {
            const filter = (interaction) => {
                interaction.deferUpdate();
                if (interaction.user.id === message.author.id) return true;
                return;
            }
            const menu1collector = message.channel.createMessageComponentCollector({ filter, max: 1 })

            menu1collector.on('end', (ButtonInteraction) => {
                if (ButtonInteraction.first().customId === 'rankcard_background') {
                    const menu2 = new MessageActionRow()
                        .addComponents(
                            new MessageSelectMenu()
                                .setCustomId('menu2')
                                .setPlaceholder('Background Customizations')
                                .addOptions([
                                    {
                                        label: 'Default',
                                        value: 'rankbg_default',
                                        description: 'Use the default color (Dark Gray).',
                                        emoji: '⬛'
                                    },
                                    {
                                        label: 'Random',
                                        value: 'rankbg_random',
                                        description: 'Use a random color eachtime.',
                                        emoji: '🌈'
                                    },
                                    {
                                        label: 'Custom',
                                        value: 'rankbg_custom',
                                        description: 'Select a custom color.',
                                        emoji: '👀'
                                    }
                                ])
                        )
                    msg.edit({ components: [menu2] })
                    const menufilter = (interaction) => {
                        interaction.deferUpdate();
                        if (interaction.isSelectMenu() && interaction.user.id === message.author.id) return true;
                        return;
                    }
                    const menu2collector = message.channel.createMessageComponentCollector({ menufilter, max: 1 })

                    menu2collector.on('collect', (MenuInteraction) => {
                        if (MenuInteraction.values[0] === 'rankbg_default') {
                            db.set(`rankcardbg.${message.author.id}`, '#232323')
                            const finalembed = new Discord.MessageEmbed()
                                .setDescription(`Background set to Default`)
                                .setColor('#232323')
                            msg.edit({ embeds: [finalembed], components: [] })
                        }
                        if (MenuInteraction.values[0] === 'rankbg_random') {
                            db.set(`rankcardbg.${message.author.id}`, 'RANDOM')
                            const finalembed = new Discord.MessageEmbed()
                                .setDescription(`Background set to Random`)
                                .setColor('RANDOM')
                            msg.edit({ embeds: [finalembed], components: [] })
                        }
                        if (MenuInteraction.values[0] === 'rankbg_custom') {
                            const menu3embed = new Discord.MessageEmbed()
                                .setDescription('Enter the HEX code of the color you want.\nYou can get the HEX code for your color **[here](https://htmlcolorcodes.com/color-picker/)**.\nYou have 3 minutes.')
                                .setColor('#2F3136');
                            msg.edit({ components: [], embeds: [menu3embed] })
                            const txtfilter = (txt) => {
                                if (txt.author.id === message.author.id && txt.channel.id === message.channel.id) return true;
                                return;
                            }
                            const menu3collector = message.channel.createMessageCollector({ txtfilter, max: 1, time: 3 * 60 * 1000 })

                            menu3collector.on('collect', (answer) => {
                                if (answer.content.startsWith('#') && answer.content.length == 7) {
                                    db.set(`rankcardbg.${message.author.id}`, answer.content)
                                    const finalembed = new Discord.MessageEmbed()
                                        .setDescription(`Background set to ${answer.content}`)
                                        .setColor(answer.content)
                                    answer.reply({ embeds: [finalembed], components: [] })
                                }
                                else {
                                    answer.reply({ content: 'Please enter a vaild HEX code.\nPlease try again.', components: [], embeds: [] })
                                }
                            })
                        }
                    })
                }
                if (ButtonInteraction.first().customId === 'rankcard_levelbar') {
                    const menu2 = new MessageActionRow()
                        .addComponents(
                            new MessageSelectMenu()
                                .setCustomId('menu2')
                                .setPlaceholder('Level Bar Customizations')
                                .addOptions([
                                    {
                                        label: 'Default',
                                        value: 'ranklb_default',
                                        description: 'Use the default color (White).',
                                        emoji: '⬜'
                                    },
                                    {
                                        label: 'Random',
                                        value: 'ranklb_random',
                                        description: 'Use a random color eachtime.',
                                        emoji: '🌈'
                                    },
                                    {
                                        label: 'Custom',
                                        value: 'ranklb_custom',
                                        description: 'Select a custom color.',
                                        emoji: '👀'
                                    }
                                ])
                        )
                    msg.edit({ components: [menu2] })
                    const menufilter = (interaction) => {
                        interaction.deferUpdate();
                        if (interaction.isSelectMenu() && interaction.user.id === message.author.id) return true;
                        return;
                    }
                    const menu2collector = message.channel.createMessageComponentCollector({ menufilter, max: 1 })

                    menu2collector.on('collect', (MenuInteraction) => {
                        if (MenuInteraction.values[0] === 'ranklb_default') {
                            db.set(`rankcardlb.${message.author.id}`, '#FFFFFF')
                            const finalembed = new Discord.MessageEmbed()
                                .setDescription(`Level Bar Color set to Default`)
                                .setColor('#FFFFFF')
                            msg.edit({embeds: [finalembed], components: [] })
                        }
                        if (MenuInteraction.values[0] === 'ranklb_random') {
                            db.set(`rankcardlb.${message.author.id}`, 'RANDOM')
                            const finalembed = new Discord.MessageEmbed()
                                .setDescription(`Level Bar color set to Random`)
                                .setColor('RANDOM')
                            msg.edit({embeds: [finalembed], components: [] })
                        }
                        if (MenuInteraction.values[0] === 'ranklb_custom') {
                            const menu3embed = new Discord.MessageEmbed()
                                .setDescription('Enter the HEX code of the color you want.\nYou can get the HEX code for your color **[here](https://htmlcolorcodes.com/color-picker/)**.\nYou have 3 minutes.')
                                .setColor('#2F3136');
                            msg.edit({ components: [], embeds: [menu3embed] })
                            const txtfilter = (txt) => {
                                if (txt.author.id === message.author.id && txt.channel.id === message.channel.id) return true;
                                return;
                            }
                            const menu3collector = message.channel.createMessageCollector({ txtfilter, max: 1, time: 3 * 60 * 1000 })

                            menu3collector.on('collect', (answer) => {
                                if (answer.content.startsWith('#') && answer.content.length == 7) {
                                    db.set(`rankcardlb.${message.author.id}`, answer.content)
                                    const finalembed = new Discord.MessageEmbed()
                                        .setDescription(`Level Bar color set to ${answer.content}`)
                                        .setColor(answer.content)
                                    answer.reply({embeds: [finalembed], components: [] })
                                }
                                else {
                                    answer.reply({ content: 'Please enter a vaild HEX code.\nPlease try again.', components: [], embeds: [] })
                                }
                            })
                        }
                    })
                }
            })
        })
    }
}