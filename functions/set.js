const Levels = require("discord-xp");
module.exports = {
    name: 'set',
    description:"This is sets",
    async execute(message, target, level){
        const newComer = message.guild.roles.cache.get("826522232309678101");
        const experienced = message.guild.roles.cache.get("836646695830814730");
        const expert = message.guild.roles.cache.get("836647761939529728");
        const professional = message.guild.roles.cache.get("836650985572007957");
        const legend = message.guild.roles.cache.get("836652115286949909");
        
       const userRoles = message.guild.members.cache.get(target.id);
       message.channel.send({content:`set ${target.tag}'s level to ${level}.`});
       if (level <= 10) {
        userRoles.roles.add(newComer);
        userRoles.roles.remove(experienced);
        userRoles.roles.remove(expert);
        userRoles.roles.remove(professional);
        userRoles.roles.remove(legend);
      } else if (level > 10 && level <= 30) {
        userRoles.roles.remove(newComer);
        userRoles.roles.add(experienced);
        userRoles.roles.remove(expert);
        userRoles.roles.remove(professional);
        userRoles.roles.remove(legend);
      } else if (level > 30 && level <= 50) {
        userRoles.roles.remove(newComer);
        userRoles.roles.remove(experienced);
        userRoles.roles.add(expert);
        userRoles.roles.remove(professional);
        userRoles.roles.remove(legend);
      } else if (level > 50 && level <= 100) {
        userRoles.roles.remove(newComer);
        userRoles.roles.remove(experienced);
        userRoles.roles.remove(expert);
        userRoles.roles.add(professional);
        userRoles.roles.remove(legend);
      } else if (level > 100) {
        userRoles.roles.remove(newComer);
        userRoles.roles.remove(experienced);
        userRoles.roles.remove(expert);
        userRoles.roles.remove(professional);
        userRoles.roles.add(legend);
      }
    }  
}