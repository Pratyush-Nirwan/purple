const Memer = require("random-jokes-api");
module.exports =  {
    name: 'praise',
    description:"praise people.",
    usage:'(mention)',
    cooldown: 5,

   async execute(message, args, client, Discord, got){
        const user = message.mentions.users.first() || message.author;
        let praise = Memer.copmliment()
        message.channel.send({content : `**${(praise)}**`, embeds:[]});
    }
}