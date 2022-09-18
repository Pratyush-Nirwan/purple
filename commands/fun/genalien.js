module.exports =  {
    name: 'genalien',
    description:"generate a random alien avatar.",
    aliases: ['galien'],
    usage: '(word)', 
    async execute(message, args, client, Discord){
    var seed;
    var Title
   if(args.slice(0).length === 0){
     seed = Date.now();
     Title = `Random alien generated`
   } else {
     seed = args.slice(0).join("-");
     Title = `Alien generated for '${seed}'`
   }
      let alien = new Discord.MessageEmbed()
      .setColor('#2F3136')
      .setTitle(Title)
      .setDescription(`Link generated:-\n\`https://robohash.org/${seed}.png?set=set2\`\nYou can download the image **[here](https://robohash.org/${seed}.png?set=set2)**`)
      .setImage(`https://robohash.org/${seed}.png?set=set2`)
      .setFooter("Powered by RoboHash.org");
  
  message.channel.send({embeds:[alien]});
    }  
}