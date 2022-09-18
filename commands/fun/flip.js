module.exports =  {
    name: 'flip',
    description:"flip a coin.",
   	execute(message, args, client, Discord){
        const outcomes = ['HEADS','TAILS'];
        const outcome = Math.floor(Math.random()*outcomes.length)
        if(outcome === 1){
            let flip = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setThumbnail('https://i.imgur.com/kEragEA.png')
    message.channel.send({ content: "**Its Heads!**", embeds: [flip]})
        } else {
            let flip = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setThumbnail('https://i.imgur.com/Wkcz3Hb.png')
    message.channel.send({ content: "**Its Tails!**", embeds: [flip]})
        }
  		
    }  
}