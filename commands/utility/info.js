const version = ('2.3.0');
module.exports = {
  name: 'info',
  description: "get some info about the bot.",
  async execute(message, args, client, Discord) {
    let infoembed = new Discord.MessageEmbed()
      .setColor('#2F3136')
      .setTitle('Info')
      .setThumbnail('https://i.imgur.com/fqzzc1Y.jpg')
      .addFields(
        { name: '**Version**', value: version },
        { name: '**Info**', value: "Bot created by **UrProBokeh**\nWith some help from **Spicy Carlos**\nThank you Spicy!❤\nThis is a Photography Utility bot.\nMade for the server [**Photographer's Support**](https://discord.gg/RmUr3Bd6ww)\nTo report any bugs, crashes etc please contact **UrProBokeh#7595**\nPlease **do not** ask for the invite link for the bot, we cannot provide an invite link as this bot is a __server specifc__ bot designed for this server only.\nFor help type `p!help`\n**Thank you**❤" },
      )
      message.channel.send({embeds:[infoembed]})
      
  }

}