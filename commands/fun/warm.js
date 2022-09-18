module.exports =  {
    name: 'warm',
    description:"warm someone(virtually)!",
    usage: '<mention>',
   async execute(message, args, client, Discord, got){
      const target = message.mentions.members.first();
      
      message.channel.send({content: `${target} got warmed by ${message.author} 💗`})
    }  
}