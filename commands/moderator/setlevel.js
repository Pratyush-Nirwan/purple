const Levels = require("discord-xp");
const setjs = require('../../functions/set');
module.exports = {
    name: 'setlevel',
    description:"This sets the current level of the mentioned person",
    usage: '<person> <level>',
    async execute(message, args, client, Discord){
        if(!message.member.roles.cache.has('776109191181893673')||!message.member.roles.cache.has('806113107235569664')||!message.member.roles.cache.has('776110194266210354')) return message.delete();
        var level = args.slice(1).join(" ");
        const target = message.mentions.users.first() || message.author;
        const check = await Levels.fetch(target.id, message.guild.id);
        if(!check){
            Levels.createUser(target.id, message.guild.id).then(Levels.setLevel(target.id, message.guild.id, level )).then(setjs.execute(message, target, level));
            
        } else {
            Levels.setLevel(target.id, message.guild.id, level ).then(setjs.execute(message, target, level));
        }  
 }
}