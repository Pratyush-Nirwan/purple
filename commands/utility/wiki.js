const ultrax = require('ultrax')
const { banned } = require('../../badwords');


module.exports = {
    name: 'wiki',
    description: 'use the wiki pedia, from discord!',
    usage: '<query>',
    cooldown: '',
    async execute(message, args, client, Discord) {
        if(args.length === 0) return message.channel.send({content:'Please provide a search query.'})
        args = args.toLocaleString().toLowerCase().split(',');

        const found = banned.some(r => args.indexOf(r) >= 0)
        if (found) {
            message.channel.send({content:`Open your browser and search yourself.`})
            message.delete();
            return;
        };
        let query = args.join(' ')

        const res = new ultrax.Wikipedia({
            message: message,
            color: "#2F3136",
            query: query
        })
        res.fetch()

    }
}