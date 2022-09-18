module.exports =  {
    name: 'gencat',
    description:"generate a random cat avatar.",
    aliases: ['gcat'],
    usage: '(word)', 
   async execute(message, args, client, Discord){
       var seed;
       var Title

      if(args.slice(0).length === 0){
        seed = Date.now();
        Title = `Random cat generated`
      } else {
        seed = args.slice(0).join("-");
        Title = `Cat generated for '${seed}'`
      }
      let cat = new Discord.MessageEmbed()
      .setColor('#2F3136')
      .setTitle(Title)
      .setDescription(`Link generated:-\n\`https://robohash.org/${seed}.png?set=set4\`\nYou can download the image **[here](https://robohash.org/${seed}.png?set=set4)**`)
      .setImage(`https://robohash.org/${seed}.png?set=set4`)
      .setFooter("Powered by RoboHash.org");
  
  message.channel.send({embeds:[cat]});
    }  
}