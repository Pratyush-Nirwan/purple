const { MessageButton, MessageActionRow } = require('discord.js');
const { DiscordAPIError } = require('discord.js');
module.exports = {
    name: 'serverinfo',
    execute(message, args, client, Discord) {
        if (!message.member.roles.cache.has('776109191181893673')) return message.delete();
        message.delete();

        let ad = "```***Hello! Seeking a place to show your Photography skills and share your thoughts?***\n\n__**Photographers Support**__ is all about collaborating, sharing, conversation, and more! We have a wide variety of topics however we’re always listening to suggestions from the community!\n:relieved:***A place to chill with others and relax.***\n:camera: ***Share your photos and videos!***\n:star: ***Promote your posts from different social media sites.***\n:musical_note: ***Who doesn't love music!***\n:gear: ***We have a custom made photographers utility bot and a music bot.***\n:robot: ***Bots are at your service.***\n:joy: ***Fun and enjoyment!***\n:heart: ***And much more!!***\n\n**JOIN NOW!!**\nGraphics link:- https://imgur.com/d6ZCeRl\nInvite:- https://discord.gg/rUrH3fpMFU ```";

        let info = new Discord.MessageEmbed()
            .setColor('#2F3136')
            .setTitle(`About`)
            .setDescription("Welcome to Photographer's Support! The server is based on photography, and promises to provide a quiet spot to hang out with other photographers. This server was founded on <t:1605088114:D> by <@727559089835737150>")

        let level = new Discord.MessageEmbed()
            .setColor('#2F3136')
            .setTitle(`Level System`)
            .setDescription("We have our own bot <@807568597370667028> handling the leveling system!\nYou earn XP by chatting in the server. You accumulate XP and rank up, Unlocking rewards on the way!\n\n*Bonus: Fridays and Saturdays are super XP days meaning you a get a lot more XP for chatting on these days!*")
            .addField("\u200b", "<@&826522232309678101>\n\n•Advertise in <#777832857967788052>\n•Ability to change nickname", true)
            .addField("\u200b", "<@&836646695830814730>\n\n•Send images in <#788872012884869181>\n•Apply for mod", true)
            .addField("\u200b", "<@&836647761939529728>\n\n•Send GIFs in <#788872012884869181>\n", true)
            .addField("\u200b", "<@&836650985572007957>\n\n•My love and care for you.\n", true)
            .addField("\u200b", "<@&836652115286949909>\n\n•I would give my life for you.\n", true)
        
        let sroles = new Discord.MessageEmbed()
            .setColor('#2F3136')
            .setTitle(`Special Roles`)
            .setDescription('These roles are hard to obtain and some of them are straight up impossible now! So it kinda makes you a VIP',true)
            .addField('\u200b', '<@&807286285446152232>\n\nYou get this when you partner with our server!\nCheck out requirenments in pins in <#789101400654217236>',true)
            .addField('\u200b', '<@&839212136660336701>\n\nOnly the first 500 members got this role, noone else is ever gonna get it.',true)
            .addField('\u200b', '<@&813786396505669715>\n\nPeople who find bugs in <@807568597370667028> get this role.',true)
            .addField('\u200b', '<@&814845278905171968>\n\nPeople who give ideas for <@807568597370667028> get this role if their ideas are implemented',true)
            .addField('\u200b', '<@&797715087350562857>\n\nOne of the two rarest roles in the server, only the 100th memeber to join the server has it, yes only one person.',true)
            .addField('\u200b', "<@&825699393385660436>\n\nThe other rarest role in the server only, the one person who named now extint currency 'BokehBits' is the only one who has it.",true)
        
        let boosterperks = new Discord.MessageEmbed()
            .setColor('#2F3136')
            .setTitle('Booster Perks')
            .setDescription('Server boosters are an important part of our community as their boosts help unlock perks for the server which everyone can enjoy!\n\n\n<a:nitro:817046401774387240>Get notified about upcoming events before anyone else.\n<a:nitro:817046401774387240>You will be able to open your own portfolio.\n<a:nitro:817046401774387240>Get their name displayed seprately.\n<a:nitro:817046401774387240>Send Images in <#788872012884869181>\n<a:nitro:817046401774387240>Send GIFs in <#788872012884869181>\n<a:nitro:817046401774387240> Get their social media profiles featured on our [website](http://www.psdiscord.rf.gd).\n<a:nitro:817046401774387240>Bypass all giveaway requirenments.')
            
        let quicklinks = new Discord.MessageEmbed()
            .setColor('#2F3136')   
            .setTitle('Quick Links')
            .setDescription('Here are some useful links related to us that might be usefull to you. You can create a ticket in <#808305970030968873> to contact staff.\n\n[Website](http://www.psdiscord.rf.gd/) • [Leave a review](https://disboard.org/review/create/776107860694007808) • [Server Stats](https://statbot.net/dashboard/776107860694007808/)') 

            message.channel.send({content:'https://i.imgur.com/oa9iAR9.png'})
            message.channel.send({embeds: [info,level,sroles]})
            message.channel.send({content:'https://i.imgur.com/5rXdNY8.png'})
            message.channel.send({embeds: [boosterperks,quicklinks]})

    }
}