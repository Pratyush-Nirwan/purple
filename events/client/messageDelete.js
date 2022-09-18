const fs = require('fs')
module.exports = (Discord, client, message) => {
    if (!message.guild) return; // If the message isn't in a guild return.
    if (message.guild) {
        const folderName = './log/'
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName)
          }
        try {
            const snipe = `${message.guild.name}\n${message.channel.id}\n${message.content}\n${message.author.tag}\n${message.author.id}`
            const data = fs.writeFileSync('./log/snipe.txt', snipe);
          } catch (err) {
            console.error(err)
          }       
    }
}