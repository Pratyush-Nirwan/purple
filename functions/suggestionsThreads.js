
module.exports = {
    async execute(message){ 

        if(message.channel.id != '807254114777432075') return;
        if(!message.content) return;
        
        const threadName = `${message.content}-${message.author.username}`
        message.channel.threads.create({
            startMessage: message,
            name: threadName,
            autoArchiveDuration: 10080,
        })

    }
}