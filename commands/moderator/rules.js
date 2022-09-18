module.exports = {
  name: 'rules',
  description: "This is sends the server rules.",
  execute(message, args, client, Discord) {
    if (message.member.roles.cache.has('776109191181893673')) {
      message.delete();
      let guidelines = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setTitle('**🚨Rules**')
        .addFields(
          { name: 'Please read Discord TOS and Community Guidelines', value: "https://discord.com/terms\nhttps://discord.com/guidelines" },
        )
    
      let rules1 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 1\n```', value: "Utilize common decency when interacting with 𝙢𝙚𝙢𝙗𝙚𝙧𝙨 𝙖𝙣𝙙 𝙨𝙩𝙖𝙛𝙛." },
        )

        let rules2 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 2\n```', value: "Refrain from using languages other than 𝙀𝙣𝙜𝙡𝙞𝙨𝙝." },
        )

        let rules3 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 3\n```', value: "If you happen to get into an 𝙖𝙧𝙜𝙪𝙢𝙚𝙣𝙩 please take it into 𝘿𝙈𝙨 so other members can have a pleasant experience." },
        )

        let rules4 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 4\n```', value: "Sending content that 𝙞𝙨𝙣'𝙩 𝙮𝙤𝙪𝙧𝙨 without writing a disclaimer, isn't permitted." },
        )

        let rules5 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 5\n```', value: "Send content in the 𝙘𝙤𝙧𝙧𝙚𝙘𝙩 𝙘𝙝𝙖𝙣𝙣𝙚𝙡𝙨 (read channel descriptions)." },
        )

        let rules6 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 6\n```', value: "Threats to other users of 𝘿𝘿𝙤𝙎, 𝘿𝙚𝙖𝙩𝙝, 𝘿𝙤𝙓, 𝙖𝙗𝙪𝙨𝙚, 𝙖𝙣𝙙 𝙤𝙩𝙝𝙚𝙧 𝙢𝙖𝙡𝙞𝙘𝙞𝙤𝙪𝙨 𝙩𝙝𝙧𝙚𝙖𝙩𝙨 are 𝙖𝙗𝙨𝙤𝙡𝙪𝙩𝙚𝙡𝙮 𝙥𝙧𝙤𝙝𝙞𝙗𝙞𝙩𝙚𝙙 and disallowed." },
        )

        let rules7 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 7\n```', value: "𝙊𝙛𝙛𝙚𝙣𝙨𝙞𝙫𝙚 names and profile pictures are not allowed.(the mods will change your nickname without warning.)" },
        )

        let rules8 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 8\n```', value: "𝙍𝙖𝙞𝙙𝙞𝙣𝙜 or mentions of 𝙧𝙖𝙞𝙙𝙞𝙣𝙜 𝙤𝙩𝙝𝙚𝙧 𝙨𝙚𝙧𝙫𝙚𝙧𝙨 are not allowed." },
        )

        let rules9 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 9\n```', value: "𝘿𝙤 𝙣𝙤𝙩 join voice chat channels without permission of the people already in there." },
        )

        let rules10 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 10\n```', value: "If your name is hard to ping, e.g has off keyboard characters in the start moderators will 𝙘𝙝𝙖𝙣𝙜𝙚 𝙮𝙤𝙪𝙧 𝙣𝙞𝙘𝙠𝙣𝙖𝙢𝙚 to a easily mentionable one." },
        )

        let rules11 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 11\n```', value: "𝘿𝙤 𝙣𝙤𝙩 mock or tease people based on the device, gear or software they use."},
        )

        let rules12 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 12\n```', value: "𝘿𝙤 𝙣𝙤𝙩 steal or try to steal the photos shared here, this is not a free stock photo platform."},
        )

      let note = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setDescription('•Your presence in the server means that you have read the rules and are accepting them.\n•Mods,Admins and Owner will take actions according to the situation.\n•Their decision is final.\n•If you think Mods,Admins or Owner have done something wrong please create a ticket in <#808305970030968873>.')
       
      
        message.channel.send({content: 'https://i.imgur.com/6ABTvCY.png'})

        message.channel.send({embeds: [guidelines]})
        message.channel.send({embeds: [rules1,rules2,rules3,rules4,rules5,rules6,rules7,rules8,rules9,rules10]})
        message.channel.send({embeds: [rules11,rules12]})
        message.channel.send({embeds: [note]})
    } else {
      message.delete();
      return;
    }
  }
}
