const google = require('googlethis')
module.exports = {
  name: 'ris',
  description: "reverse image search",
  async execute(message, args, client, Discord) {
    
    const reverse = await google.search(`${args[0]}`, { ris: true });
    console.log(reverse.results);
    message.channel.send({content : `${reverse.results[0].url}`});
  }

}