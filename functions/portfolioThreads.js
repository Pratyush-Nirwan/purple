
module.exports = {
    async execute(message){ 

        if(message.attachments.size === 0) return;
        const content = message.content || '';
        
        const threadName = `${content}-${message.author.username}`
        message.channel.threads.create({
            startMessage: message,
            name: threadName,
            autoArchiveDuration: 10080,
        })

    }
}