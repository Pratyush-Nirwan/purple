const Memer = require("random-jokes-api");
module.exports =  {
    name: 'showerthought',
    description:"get a random shower thought.",
    cooldown: 5,

   async execute(message, args, client, Discord, got){
        const user = message.mentions.users.first() || message.author;
        let thought = Memer.showerThought()
        message.channel.send({content : `**${(thought)}**`});
    }
}