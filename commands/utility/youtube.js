
const YouTube = require("youtube-sr").default;
module.exports = {
    name: 'youtube',
    description:"search for youtube videos.",
    aliases:["yt"],
    usage: '<video you want>',
    execute(message, args, client, Discord){
        YouTube.search(args.join(' '), { limit: 1 })
        .then(x => { 
            if(x[0] === undefined ){
            return message.reply({content:`can't find a video with title \`${args.join(' ')}\`.`})
        }
            else{
            message.channel.send({content:`https://www.youtube.com/watch?v=${x[0].id}`});}
        })
        .catch(console.error);
  }  
}