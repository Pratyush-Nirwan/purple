const figlet = require('figlet')
module.exports = {
    name: 'textart',
    description: "generate text art.",
    usage: '<word>',
    execute(message, args, client, Discord){
        if(args.length === 0) return message.channel.send({content:"Please provide a word to turn into art."});
        figlet.text(args.join("\n"), {
            font: "",
        }, async (err,data)=>{
            if(err){
                message.channel.send({content:"error"});
                return;
            }
            message.channel.send({content:`\`\`\`${data}\`\`\``})
        });
  } 
}