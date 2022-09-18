module.exports =  {
    name: 'bored',
    description:"know what you can do if you are bored.",
   async execute(message, args, client, Discord, got){
        response = await got('https://www.boredapi.com/api/activity');
        obj = JSON.parse(response.body);

        let embed = new Discord.MessageEmbed()
        .setTitle('So you are bored?')
        .setDescription(`${obj.activity}!`)
        .setColor('#2F3136')
        message.channel.send({ embeds: [embed] });
    }
}