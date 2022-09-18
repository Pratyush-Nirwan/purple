const Memer = require("random-jokes-api");
module.exports =  {
    name: 'joke',
    description:"you can get some jokes to laugh at!",
    cooldown: 5,

   async execute(message, args, client, Discord, got){
        const user = message.mentions.users.first() || message.author;
        let joke = Memer.pun()
        message.channel.send({content : `**${(joke)}**`});
    }
}