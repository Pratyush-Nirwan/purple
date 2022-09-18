module.exports =  {
    name: 'genrobo',
    description:"generate a random robot avatar.",
    aliases: ['grobo'],
    usage: '(word)', 
   async execute(message, args, client, Discord){
    var seed;
    var Title
   if(args.slice(0).length === 0){
     seed = Date.now();
     Title = `Random robo generated`
   } else {
     seed = args.slice(0).join("-");
     Title = `Robo generated for '${seed}'`
   }
      let robo = new Discord.MessageEmbed()
      .setColor('#2F3136')
      .setTitle(Title)
      .setDescription(`Link generated:-\n\`https://robohash.org/${seed}.png?set=set1\`\nYou can download the image **[here](https://robohash.org/${seed}.png?set=set1)**`)
      .setImage(`https://robohash.org/${seed}.png?set=set1`)
      .setFooter("Powered by RoboHash.org");
  
  message.channel.send({embeds:[robo]});
    }  
}