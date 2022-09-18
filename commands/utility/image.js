const cheerio = require('cheerio');
const request = require('request');

module.exports = {
    name: 'image',
    description:"send an image.",
    usage: '<image you want>', 
    async execute(message, args, client, Discord, reply){
        var search = args.slice(0).join(" "); 
    const banned = ['sex', 'nudes', 'nude', 'porn', 'penis', 'penises', 'cunt', 'cunts', 'dick', 'dicks', 'vagina', 'titty', 'titties', 'breast', 'rape', 'fuck', 'nigger', 'nigga'];
    const found = banned.some(r=> args.indexOf(r) >= 0)

    if(found) return message.channel.send({content: `I won't search such things.😡`});
    var options = {
        uri: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody){
        if (error) {
         
            return;
        }
        $ = cheerio.load(responseBody); 

        var links = $(".image a.link");
 
        console.log(links);
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls)
        if (!urls.length) {

            message.reply({content:'Sorry no results were found!, this can happen sometimes -_- try again.'});
            return;
        }

        //emebed1
        const url1 = urls[Math.floor(Math.random() *urls.length)];
        let domain1 = (new URL(url1));
        domain1 = domain1.hostname;
        let embed1 = new Discord.MessageEmbed()
        .setTitle(`Image for:`)
        .setDescription(`\`${search}\``)
        .setImage(url1)
        .setColor('#2F3136')
        .setFooter(domain1)

        message.channel.send({embeds:[embed1]})
    });
    
    
    }
}