module.exports = {
    name: 'serversuggest',
    description:"send a suggestion for the server.",
    usage: '<your suggestion>',
   async execute(message, args, client, Discord){
        const suggestionsChannel = message.guild.channels.cache.get("807254114777432075");
        var suggestion = args.slice(0).join(" ");
        if(!suggestion) return message.channel.send({content: 'Please provide a suggestion\nUsage: `p!botsuggest <your suggestion>`'})
        let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))   
	.setColor('#FFFF00')
	.setTitle('suggested :-')
    .setDescription("```"+suggestion+"```")   
    .addFields(
		{ name: '**Status**', value: "PENDING"},
  )
        message.delete();
		suggestionsChannel.send({embeds:[embed]}).then(sentEmbed => {
            sentEmbed.react("✅")
            sentEmbed.react("❌")
       let suggestionUrl = sentEmbed.url;
            
       let dmEmbed = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('Server suggestion submitted!')
    .setDescription("Your suggestion has been submitted succesfully.\nSuggestion:-\n```"+suggestion+"```\n You can check it out **[Here]("+suggestionUrl+")**") 
		message.author.send({embeds:[dmEmbed]});
        });
    }
}

