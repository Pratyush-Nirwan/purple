module.exports =  {
    name: 'hug',
    description:"give someone a hug",
    usage: '<mention>',
   async execute(message, args, client, Discord, got){
      const target = message.mentions.members.first();
      if(!target) return message.reply({content:"Uhh, Who do you want to hug?"});
      if(target.id === message.author.id) return message.reply({content:"Hugging your self is nice and all but I am a bot and I don't have feelings."})  
      response = await got('https://kawaii.red/api/gif/hug/token=727559089835737150.KJwcJB12pF3DYd421sio/');
      obj = JSON.parse(response.body);

      const GIF = obj.response;
      let embed = new Discord.MessageEmbed()
      .setDescription(`${message.author} is hugging ${target}!♥💞`)
      .setColor(`#2F3136`)
      .setImage(GIF)

      message.channel.send({content : `${message.author} ${target}`, embeds:[embed]});
    }  
}