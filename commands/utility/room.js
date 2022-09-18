const { MessageButton, MessageActionRow, MessageSelectMenu, ButtonInteraction, Message } = require("discord.js")
const emojis = [
    '😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '✂', '📌', '📎', '✒', '✏', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '⛺', '🏭', '🗼', '🗾', '🗻', '🌄', '🌅', '🌃', '🗽', '🌉', '🎠', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '⬆', '⬇', '⬅', '➡', '🔠', '🔡', '🔤', '↗', '↖', '↘', '↙', '↔', '↕', '🔄', '◀', '▶', '🔼', '🔽', '↩', '↪', 'ℹ', '⏪', '⏩', '⏫', '⏬', '⤵', '⤴', '🆗', '🔀', '🔁', '🔂', '🆕', '🆙', '🆒', '🆓', '🆖', '📶', '🎦', '🈁', '🈯', '🈳', '🈵', '🈴', '🈲', '🉐', '🈹', '🈺', '🈶', '🈚', '🚻', '🚹', '🚺', '🚼', '🚾', '🚰', '🚮', '🅿', '♿', '🚭', '🈷', '🈸', '🈂', 'Ⓜ', '🛂', '🛄', '🛅', '🛃', '🉑', '㊙', '㊗', '🆑', '🆘', '🆔', '🚫', '🔞', '📵', '🚯', '🚱', '🚳', '🚷', '🚸', '⛔', '✳', '❇', '❎', '✅', '✴', '💟', '🆚', '📳', '📴', '🅰', '🅱', '🆎', '🅾', '💠', '➿', '♻', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔯', '🏧', '💹', '💲', '💱', '©', '®', '™', '〽', '〰', '🔝', '🔚', '🔙', '🔛', '🔜', '❌', '⭕', '❗', '❓', '❕', '❔', '🔃', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '✖', '➕', '➖', '➗', '♠', '♥', '♣', '♦', '💮', '💯', '✔', '☑', '🔘', '🔗', '➰', '🔱', '🔲', '🔳', '◼', '◻', '◾', '◽', '▪', '▫', '🔺', '⬜', '⬛', '⚫', '⚪', '🔴', '🔵', '🔻', '🔶', '🔷', '🔸', '🔹'
];
const auditLog = require("../../functions/auditLog")

module.exports = {
    name: 'room',
    description: "This make rooms for you and your friends!",
    async execute(message, args, client, Discord) {

        if (!message.mentions.users.first()) return message.reply('Mention atleast one other person to make a room!')
        if (message.mentions.users.size > 10) return message.channel.send('Sorry, but you can only make a romm for up to 10 people!');
        const emoji = `${emojis[Math.floor(Math.random() * emojis.length)]}${emojis[Math.floor(Math.random() * emojis.length)]}`;
        const { guild } = message;
        const house = guild.channels.cache.get('879016741903167568')
        const menu = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Private')
                    .setStyle('SUCCESS')
                    .setCustomId('private_room'),

                new MessageButton()
                    .setLabel('Public')
                    .setStyle('SUCCESS')
                    .setCustomId('public_room'),

                new MessageButton()
                    .setLabel('Cancel')
                    .setStyle('DANGER')
                    .setCustomId('cancel')
            )

        const menuEmbed = new Discord.MessageEmbed()
            .setTitle('Room Creator🏠🛠')
            .setDescription('What type of room do you want to create?')
            .setColor('#2F3136')

        message.channel.send({ embeds: [menuEmbed], components: [menu] }).then((msg) => {

            const filter = (interaction) => {
                interaction.deferUpdate();
                if (interaction.user.id === message.author.id) return true;
                return;
            }
            const menucollector = message.channel.createMessageComponentCollector({ filter, max: 1 })
            menucollector.on('end', (ButtonInteraction) => {

                if (ButtonInteraction.first().customId === 'public_room') {
                    msg.edit({ content: `<@${message.author.id}>`, embeds: [roomcreated], components: [editedmenu] })
                }
                if (ButtonInteraction.first().customId === 'private_room') {
                        const roomcreated = new Discord.MessageEmbed()
                        .setTitle('Public Room created!🏠')
                        .setDescription('Instructions on how to add members goes here.')
                        .setColor('#2F3136');

                    const editedmenu = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setLabel('Private')
                                .setStyle('SECONDARY')
                                .setCustomId('private_room')
                                .setDisabled(true),

                            new MessageButton()
                                .setLabel('Public')
                                .setStyle('SUCCESS')
                                .setCustomId('public_room')
                                .setDisabled(true),

                            new MessageButton()
                                .setLabel('Cancel')
                                .setStyle('DANGER')
                                .setCustomId('cancel')
                                .setDisabled(true),
                        )

                    const memberRole = guild.roles.cache.get('776321406497456148');

                    // Create a channel
                    const roomHead = message.author;
                    const roomID = Date.now();
                    guild.channels.create(`Public-${message.author.username}${emoji}`, {
                        parent: house,
                        type: 'text',
                        permissionOverwrites: [
                            {
                                id: memberRole,
                                deny: ['VIEW_CHANNEL'],
                            },
                        ],
                    }).then(room => {
                        auditLog.execute('🏠Room created!', `Created by ${message.author}\nRoom ID- \`${roomID}\``, client, Discord);
                        var timeout
                        function startTimer() {
                            timeout = setTimeout(() => {
                                auditLog.execute('🏠Room deleted!', `Inactive\nRoom ID- \`${roomID}\``, client, Discord);
                                room.delete();

                            }, 3600000);
                        }
                        const activityfilter = m => m.content.length >= 1;
                        const activityCollector = room.createMessageCollector(activityfilter);

                        activityCollector.on('collect', m => {
                            clearTimeout(timeout);
                            startTimer();
                        });
                        message.mentions.users.forEach(mention => {
                            // update the perms for all the mentined users.
                            const user = client.users.cache.get(mention.id);
                            room.permissionOverwrites.edit(user, {
                                VIEW_CHANNEL: true,
                            });
                        });
                        // map the mentioned users in a string to send in the embed
                        const mentionPeople = message.mentions.users.map((m) => {
                            return `${message.author}${m}`;
                        }).join(' ');
                        const embed = new Discord.MessageEmbed()
                            .setDescription(`Here is your room,\nRoom Head- ${message.author}\nRoom ID - \`${roomID}\``)
                            .setColor('#2F3136')
                            .setFooter(`${roomHead.tag} can delete the room by clicking on 🛑`)
                        room.send({content:`${mentionPeople}`,
                            embeds: [embed]
                        }).then((msg) => {
                            msg.react('🛑');
                            const filter = (reaction, user) => {
                                return reaction.emoji.name === '🛑' && user.id === message.author.id;
                            };

                            const collector = msg.createReactionCollector({filter});

                            collector.on('collect', (reaction, user) => {
                                msg.reactions.resolve('🛑').users.remove(user.id);
                                const confirmEmbed = new Discord.MessageEmbed()
                                    .setDescription('Are you sure?')
                                    .setColor('#2F3136');

                                room.send({content:`${roomHead}`,
                                    embeds: [confirmEmbed]
                                }).then((confirmMsg) => {
                                    confirmMsg.react('✅');
                                    confirmMsg.react('❌');
                                    const confirmFilter = (confirmreaction, confirmuser) => {
                                        return (confirmreaction.emoji.name === '✅' || confirmreaction.emoji.name === '❌') && confirmuser.id === message.author.id;
                                    };
                                    const confirmCollector = confirmMsg.createReactionCollector({confirmFilter});

                                    confirmCollector.on('collect', (confirmreaction, confirmuser) => {
                                        if (confirmreaction.emoji.name === '✅') {
                                            confirmMsg.reactions.removeAll()
                                            room.send({content:'> 👋**The room will de deleted in 5 seconds...**'});
                                            setTimeout(() => {
                                                clearTimeout(timeout);
                                                auditLog.execute('🏠Room deleted!', `Deleted by Head\nRoom ID- \`${roomID}\``, client, Discord);
                                                room.delete();
                                            }, 5000);
                                        }
                                        else {
                                            confirmMsg.reactions.resolve('❌').users.remove(user.id);
                                            confirmMsg.delete();
                                        }
                                    });
                                });
                            });
                        });
                    });


                    msg.edit({ content: `<@${message.author.id}>`, embeds: [roomcreated], components: [editedmenu] })
                }
                if (ButtonInteraction.first().customId === 'cancel') {
                    const roomcreated = new Discord.MessageEmbed()
                        .setTitle('Room Created cancelled🚫')
                        .setDescription('The room creation was cancelled by the user.')
                        .setColor('#2F3136');

                    const editedmenu = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setLabel('Private')
                                .setStyle('SUCCESS')
                                .setCustomId('private_room')
                                .setDisabled(true),

                            new MessageButton()
                                .setLabel('Public')
                                .setStyle('SUCCESS')
                                .setCustomId('public_room')
                                .setDisabled(true),

                            new MessageButton()
                                .setLabel('Cancel')
                                .setStyle('SECONDARY')
                                .setCustomId('cancel')
                                .setDisabled(true),
                        )

                    msg.edit({ content: `<@${message.author.id}>`, embeds: [roomcreated], components: [editedmenu] })
                    return;
                }
            })
        })
    }

}