const prettyMilliseconds = require('pretty-ms');
module.exports = {
    name: 'ping',
    description:"check the ping.",
    execute(message, args, client, Discord){
      
	message.reply({content: 'Calculating ping...'}).then(resultMessage =>{
		const ping = resultMessage.createdTimestamp - message.createdTimestamp
		const uptime = prettyMilliseconds(client.uptime);
	let color;
	if(ping >= 200) {
		color = '#FF0000';
	}
	else if(ping >= 50 && ping <= 200) {
		color = '#FFFF00';
	}
	else if(ping <= 50) {
		color = '#00FF00';
	}
	const pingem = new Discord.MessageEmbed()
		.setColor(color)
		.setTitle('🏓Pong!')
		.addField('**Ping: **', `${ping} ms`, true)
		.addField('**Uptime: **', `${uptime}`, true);
	resultMessage.edit({content: " ",embeds:[pingem]});
	})
	
  }     
}