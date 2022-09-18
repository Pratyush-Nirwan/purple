module.exports =  {
    name: 'slap',
    description:"can slap someone(virtually)!",
    usage: '<mention>',
   async execute(message, args, client, Discord, got){
      const target = message.mentions.members.first();
      if(!target) return message.reply({content:"Uhh, Who do you want to slap?"})
      if(target.id === message.author.id) return message.reply({content:'Slapping yourself is not good bruh.'});

      response = await got('https://kawaii.red/api/gif/slap/token=727559089835737150.KJwcJB12pF3DYd421sio/');
      obj = JSON.parse(response.body);

      const GIF = obj.response;

      let embed = new Discord.MessageEmbed()
      .setDescription(`${target} got slapped by ${message.author}!😂`)
      .setColor(`#2F3136`)
      .setImage(GIF)
      message.channel.send({content : `${message.author} ${target}`, embeds:[embed]});
    }  
}