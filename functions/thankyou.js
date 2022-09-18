module.exports = {
    async isthankyou(message, client, Discord) {
        if (!message.mentions.members) return;
        if(message.mentions.users.first() === message.author) return;
        if (message.mentions.members.first() === message.guild.me) return;
        if (message.author.bot) return;
        const {guild} = message;
        const thankedPerson = message.mentions.members.first()
        if(!thankedPerson) return;
        const thankerPerson = guild.members.cache.get(message.author.id)
        const messageArray = message.content.toLowerCase().split(' ');

        if (messageArray.length === 0) return;

        const thankArray = ['thank', 'thanku', 'thankx', 'thanks', 'thnks', 'thx', 'thnx','cheers',];

        if(messageArray.some(word => thankArray.includes(word))){

            message.channel.send({content:`> **${thankedPerson.displayName}** Recieved a Thank You from **${thankerPerson.displayName}** ♥`})
        }
    }
}