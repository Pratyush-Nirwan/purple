module.exports = {
  name: 'rules',
  description: "This is sends the server rules.",
  execute(message, args, client, Discord) {
    if (message.member.roles.cache.has('776109191181893673')) {
      message.delete();
      let guidelines = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setTitle('**๐จRules**')
        .addFields(
          { name: 'Please read Discord TOS and Community Guidelines', value: "https://discord.com/terms\nhttps://discord.com/guidelines" },
        )
    
      let rules1 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 1\n```', value: "Utilize common decency when interacting with ๐ข๐๐ข๐๐๐ง๐จ ๐๐ฃ๐ ๐จ๐ฉ๐๐๐." },
        )

        let rules2 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 2\n```', value: "Refrain from using languages other than ๐๐ฃ๐๐ก๐๐จ๐." },
        )

        let rules3 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 3\n```', value: "If you happen to get into an ๐๐ง๐๐ช๐ข๐๐ฃ๐ฉ please take it into ๐ฟ๐๐จ so other members can have a pleasant experience." },
        )

        let rules4 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 4\n```', value: "Sending content that ๐๐จ๐ฃ'๐ฉ ๐ฎ๐ค๐ช๐ง๐จ without writing a disclaimer, isn't permitted." },
        )

        let rules5 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 5\n```', value: "Send content in the ๐๐ค๐ง๐ง๐๐๐ฉ ๐๐๐๐ฃ๐ฃ๐๐ก๐จ (read channel descriptions)." },
        )

        let rules6 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 6\n```', value: "Threats to other users of ๐ฟ๐ฟ๐ค๐, ๐ฟ๐๐๐ฉ๐, ๐ฟ๐ค๐, ๐๐๐ช๐จ๐, ๐๐ฃ๐ ๐ค๐ฉ๐๐๐ง ๐ข๐๐ก๐๐๐๐ค๐ช๐จ ๐ฉ๐๐ง๐๐๐ฉ๐จ are ๐๐๐จ๐ค๐ก๐ช๐ฉ๐๐ก๐ฎ ๐ฅ๐ง๐ค๐๐๐๐๐ฉ๐๐ and disallowed." },
        )

        let rules7 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 7\n```', value: "๐๐๐๐๐ฃ๐จ๐๐ซ๐ names and profile pictures are not allowed.(the mods will change your nickname without warning.)" },
        )

        let rules8 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 8\n```', value: "๐๐๐๐๐๐ฃ๐ or mentions of ๐ง๐๐๐๐๐ฃ๐ ๐ค๐ฉ๐๐๐ง ๐จ๐๐ง๐ซ๐๐ง๐จ are not allowed." },
        )

        let rules9 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 9\n```', value: "๐ฟ๐ค ๐ฃ๐ค๐ฉ join voice chat channels without permission of the people already in there." },
        )

        let rules10 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 10\n```', value: "If your name is hard to ping, e.g has off keyboard characters in the start moderators will ๐๐๐๐ฃ๐๐ ๐ฎ๐ค๐ช๐ง ๐ฃ๐๐๐?๐ฃ๐๐ข๐ to a easily mentionable one." },
        )

        let rules11 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 11\n```', value: "๐ฟ๐ค ๐ฃ๐ค๐ฉ mock or tease people based on the device, gear or software they use."},
        )

        let rules12 = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .addFields(
          { name: '```RULE 12\n```', value: "๐ฟ๐ค ๐ฃ๐ค๐ฉ steal or try to steal the photos shared here, this is not a free stock photo platform."},
        )

      let note = new Discord.MessageEmbed()
        .setColor('#2F3136')
        .setDescription('โขYour presence in the server means that you have read the rules and are accepting them.\nโขMods,Admins and Owner will take actions according to the situation.\nโขTheir decision is final.\nโขIf you think Mods,Admins or Owner have done something wrong please create a ticket in <#808305970030968873>.')
       
      
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
