const fs = require('fs');

module.exports = async (client, Discord, guild) => {
    const categories = fs.readdirSync('./commands/');
    const categories_seive = categories.indexOf('moderator');
    categories.splice(categories_seive, 1);
    const randCategory = categories[Math.floor(Math.random() * categories.length)];
    const commandFiles = fs.readdirSync(`./commands/${randCategory}`).filter(File => File.endsWith('.js'));
    if (randCategory === 'rank') {
        const cmd_seive = commandFiles.indexOf('leaderboard.js');
        commandFiles.splice(cmd_seive, 1);
    }
    const randCmd_name = commandFiles[Math.floor(Math.random() * commandFiles.length)];
    const randCmd = require(`../commands/${randCategory}/${randCmd_name}`);

    const channelArray = ['788872012884869181', '793142905727352852'];
    function sendCMD() {
        const randChannel = guild.channels.cache.get(channelArray[Math.floor(Math.random() * channelArray.length)]);
        console.log(randChannel)
        if (randCmd.description) {
            let embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`You can ${randCmd.description}\n Just do \`p!${randCmd.name} ${randCmd.usage || ''}\``)   
                .setThumbnail('https://i.imgur.com/fqzzc1Y.jpg');
                if(randChannel.lastMessage.author.id != client.user.id){
                    randChannel.send({embeds: [embed]});
                }
        } else {
            sendCMD();
        }
    }
    setInterval(() => {
        sendCMD();
    }, 28800000);
}

