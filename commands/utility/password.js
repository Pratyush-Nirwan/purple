const generatePassword = require('password-generator')
module.exports = {
    name: 'password',
    description:'generate a strong password for yourself',
    usage:'(number of characters)',
    cooldown: 10,
    execute(message, args, client, Discord){
      if(args[0]>500){
        let embed = new Discord.MessageEmbed()
        .setDescription(`Have mercy on hackers they have a family too.👨‍👩‍👦`)
        .setColor('RED')

        message.reply({embeds :[embed]})
        return;
      }
        const chars = parseInt(args[0]) || 8;

        let embed = new Discord.MessageEmbed()
        .setTitle('Password Generated!')
        .setDescription(`Your password is -\n \`${generatePassword(chars, false,/\w/)}\``)
        .setColor('RED')
        .setFooter('Note:- The generated passwords are not saved or sent anywhere.')
        message.author.send({embeds:[embed]})
        message.reply({content:'Check your DMs!'})
  }     
}