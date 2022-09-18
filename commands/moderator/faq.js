module.exports = {
    name: 'faq',
    description:"This is sends the server faq's.",
    usage: '<faq number>',
    execute(message, args, client, Discord){
          var faqNumber = args.slice(0).join(" ");
            if(!faqNumber && message.member.roles.cache.has('776109191181893673')){
        let faq = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle("❓FAQ's")
    .addFields(
        { name: '**\nFAQ #1**', value: "> **Why did my message get deleted?**\n```Your message contained something that violated our rules or Discord TOS.```"},
    )
    .addFields(
		{ name: '**\nFAQ #2**', value: "> **Why did the image I sent got deleted?**\n```The image was found to be owned by someone else and you hadn't given the credit for the image to them or the image was inappropiate.```"},
    )
    .addFields(
		{ name: '**\nFAQ #3**', value: "> **Why did I get warned?**\n```You did something that violated our rules or Discord TOS.```"},
    )
    .addFields(
		{ name: '**\nFAQ #4**', value: "> **Why did I get muted?**\n```You did something that voilated our rules or Discord TOS that was severe enough to get you muted.```"},
    )
    .addFields(
		{ name: '**\nFAQ #5**', value: "> **Why did I get muted in VC?**\n```You spoke something that voilated our rules or Discord TOS that was severe enough to get you muted.```"},
    )
    .addFields(
		{ name: '**\nFAQ #6**', value: "> **Why did I get removed from the VC?**\n```You were in the VC without the permission of the people already there or spoke something that voilated our rules or Discord TOS that was severe enough to get you kicked from the VC.```"},
    )
    .addFields(
		{ name: '**\nFAQ #7**', value: "> **Why did my nickname got changed?**\n```Your nickname was inappropiate or had too many off-keyboard characters thus making it hard to mention you.```"},
    )
	.setFooter("The Photographer's support");
    let note = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('**📝Note**')
  .setDescription('**`If you think Mods,Admins or Owner have done something wrong please create a ticket in`**<#808305970030968873>.')
  message.delete();
  message.channel.send({ content: 'https://i.imgur.com/KSBnu5s.png'})
  message.channel.send({ embeds: [faq, note]})

                return;
		}
        if(faqNumber == 1){ if(!message.member.roles.cache.has('776109191181893673')||!message.member.roles.cache.has('806113107235569664')||!message.member.roles.cache.has('776110194266210354')) return message.delete();
            let faq = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('FAQ #1')
    .setDescription('**Why did my message get deleted?**\nYour message contained something that violated our rules or Discord TOS.')
    message.channel.send({ embeds: [faq]})
            return;
        }
        if(faqNumber == 2){  if(!message.member.roles.cache.has('776109191181893673')||!message.member.roles.cache.has('806113107235569664')||!message.member.roles.cache.has('776110194266210354')) return message.delete();
             let faq = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('FAQ #2')
    .setDescription("**Why did the image I sent got deleted?**\nThe image was found to be owned by someone else and you hadn't given the credit for the image to them or the image was inappropiate.")

    message.channel.send({ embeds: [faq]})
            return;
        }
        if(faqNumber == 3){ if(!message.member.roles.cache.has('776109191181893673')||!message.member.roles.cache.has('806113107235569664')||!message.member.roles.cache.has('776110194266210354')) return message.delete();
            let faq = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('FAQ #3')
    .setDescription("**Why did I get warned?**\nYou did something that violated our rules or Discord TOS.")
message.channel.send({ embeds: [faq]})
            return;
        }
        if(faqNumber == 4){ if(!message.member.roles.cache.has('776109191181893673')||!message.member.roles.cache.has('806113107235569664')||!message.member.roles.cache.has('776110194266210354')) return message.delete();
            let faq = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('FAQ #4')
    .setDescription("**Why did I get muted?**\nYou did something that voilated our rules or Discord TOS that was severe enough to get you muted.")
message.channel.send({ embeds: [faq]})
            return;
        }
        if(faqNumber == 5){ if(!message.member.roles.cache.has('776109191181893673')||!message.member.roles.cache.has('806113107235569664')||!message.member.roles.cache.has('776110194266210354')) return message.delete();
            let faq = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('FAQ #5')
    .setDescription("**Why did I get muted in VC?**\nYou spoke something that voilated our rules or Discord TOS that was severe enough to get you muted.")
message.channel.send({ embeds: [faq]})
            return;
        }
        if(faqNumber == 6){
if(!message.member.roles.cache.has('776109191181893673')||!message.member.roles.cache.has('806113107235569664')||!message.member.roles.cache.has('776110194266210354')) return message.delete();
            let faq = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('FAQ #6')
    .setDescription("**Why did I get removed from the VC?**\nYou were in the VC without the permission of the people already there or spoke something that voilated our rules or Discord TOS that was severe enough to get you kicked from the VC.")
message.channel.send({ embeds: [faq]})
            return;
        }
        if(faqNumber == '7'){ if(!message.member.roles.cache.has('776109191181893673')||!message.member.roles.cache.has('806113107235569664')||!message.member.roles.cache.has('776110194266210354')) return message.delete();
            let faq = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('FAQ #7')
    .setDescription("**Why did my nickname got changed?**\nYour nickname was inappropiate or had too many off-keyboard characters thus making it hard to mention you.")
message.channel.send({ embeds: [faq]})
            return;
        } else {
            message.delete();
            return;
        }
    }
}