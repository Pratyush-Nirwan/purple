module.exports =  {
    name: 'genhuman',
    description:"generate a random human avatar.",
    aliases: ['ghuman'],
    usage: '(word)', 
   async execute(message, args, client, Discord){
    var seed;
    var Title
   if(args.slice(0).length === 0){
     seed = Date.now();
     Title = `Random human generated`
   } else {
     seed = args.slice(0).join("-");
     Title = `Human generated for '${seed}'`
   }
      let human = new Discord.MessageEmbed()
      .setColor('#2F3136')
      .setTitle(Title)
      .setDescription(`Link generated:-\n\`https://robohash.org/${seed}.png?set=set5\`\nYou can download the image **[here](https://robohash.org/${seed}.png?set=set5)**`)
      .setImage(`https://robohash.org/${seed}.png?set=set5`)
      .setFooter("Powered by RoboHash.org");
  
  message.channel.send({embeds:[human]});
    }  
}