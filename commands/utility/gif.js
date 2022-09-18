const fetch = require('node-fetch');
module.exports =  {
    name: 'gif',
    description:"make the bot send a gif",
    usage: '(gif you want)',
   async execute(message, args, client, Discord){
      var search = args.slice(0).join(" ");
      let url = "https://g.tenor.com/v1/search?q="+search+"&key=HWKHUALW4PA5&ContentFilter=high";
      let response = await fetch(url);
      let json = await response.json();
      let index = Math.floor(Math.random() * json.results.length)
       message.channel.send({content:json.results[index].url})
    }  
}