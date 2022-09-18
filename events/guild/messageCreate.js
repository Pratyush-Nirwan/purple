const fs = require('fs')
const got = require('got');
const afk = require('../../functions/afk')
const cooldowns = new Map();
const chatbot = require('../../functions/chatbot')
const {isthankyou} = require('../../functions/thankyou')
const {isFaq} = require('../../functions/faq');
const {levelup} = require('../../functions/levelup');
const {findSimilarCmd} = require('../../functions/similarcmd')
const susPhoto = require('../../functions/susPhoto')
const portfolioThreads = require('../../functions/portfolioThreads')
const suggestionThreads = require('../../functions/suggestionsThreads')
const {translate} = require('../../functions/translate')

const PREFIX = 'p!';
module.exports = async (Discord, client, message) => {
  if (message.author.bot) return;
  afk.execute(Discord, client, message);
  susPhoto.execute(message, client, Discord);
  isthankyou(message, client, Discord);
  levelup(message);
  suggestionThreads.execute(message);
  if(message.channel.name.includes('-portfolio')){
    portfolioThreads.execute(message);
  }
  if (message.channel.id === "824684945250975774") {
    if (message.attachments.size === 0) return message.delete();
    if (message.attachments.size > 1) {
      message.reply({content:"Please send all the photos one by one!"});
      message.delete();
      return;
    }
    if (message.attachments.size === 1) {
      const featuredChannel = message.guild.channels.cache.get("824684976145432637");
      message.react("❤️");
      message.react("💬");
    }
  }

  const args = message.content.slice(PREFIX.length).split(/ +/);
  isFaq(message, args, Discord)
  translate(message, args, Discord)

  if (!message.content.toLowerCase().startsWith(PREFIX) || message.author.bot) return;

  const cmd = args.shift().toLowerCase();


  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
  if (command) {
    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Discord.Collection());
    }
  }
  if (!command) return findSimilarCmd(message, cmd, Discord);
  const currentTime = Date.now();
  const timeStamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown) * 1000;

  if (timeStamps.has(message.author.id)) {
    const expirationTime = timeStamps.get(message.author.id) + cooldownAmount;
    if (currentTime < expirationTime) {
      const timeLeft = (expirationTime - currentTime) / 1000;
      return message.reply({content:`Please wait **${timeLeft.toFixed(1)}** more seconds before using \`p!${command.name}\``});
    }
  }
  timeStamps.set(message.author.id, currentTime);
  setTimeout(() => timeStamps.delete(message.author.id), cooldownAmount);

  if (command) command.execute(message, args, client, Discord, got, cmd);
}
