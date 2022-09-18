const fs = require('fs')
module.exports =  {
    name: 'ineedanangel',
    description:"can ease yourself if you are feeling down.",
   async execute(message, args, client, Discord){
        const embed = new Discord.MessageEmbed()
        .setTitle('Hey there!👋')
        .setDescription("I see you are feeling upset or sad, well guess what there is no need to be sad or upset!\n No matter if you know it or not there are many people who think that you are awesome and love you so much!♥\n**[Here is something to cheer you up!](https://findahelpline.com/)**\n Don't be sad! Be happy!")
        .setColor('#2F3136')
        message.reply({embeds: [embed]})
    }  
}