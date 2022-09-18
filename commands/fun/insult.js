const Memer = require("random-jokes-api");
module.exports =  {
    name: 'insult',
    description:"insult people.",
    usage:'(mention)',
    cooldown: 5,

   async execute(message, args, client, Discord, got){
        const user = message.mentions.users.first() || message.author;
        let roast = Memer.roast()
        message.channel.send({content : `**${(roast)}**`});
    }
}