const Levels = require("discord-xp");
module.exports = {
    async levelup(message){
      if(message.channel.id )
        if(new Date().getDay() === 5 || new Date().getDay() === 6){
            randomAmountOfXp = (Math.floor(Math.random() * 29) + 1)*3;
          }else{
            randomAmountOfXp = Math.floor(Math.random() * 29) + 1;
          }
        
          const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
          if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id);
            const userRoles = message.guild.members.cache.get(message.author.id);
        
            const rankingChannel = message.guild.channels.cache.get("794183463153696779");
            if(new Date().getDay() === 5 || new Date().getDay() === 6){
              rankingChannel.send({content: `${message.author}, congratulations! You have leveled up to **${user.level}**. :tada:\n *+300% Bonus XP is active!⚡*`})
            }else{
              rankingChannel.send({content: `${message.author}, congratulations! You have leveled up to **${user.level}**. :tada:`})
            }
           
        
            const newComer = message.guild.roles.cache.get("826522232309678101");
            const experienced = message.guild.roles.cache.get("836646695830814730");
            const expert = message.guild.roles.cache.get("836647761939529728");
            const professional = message.guild.roles.cache.get("836650985572007957");
            const legend = message.guild.roles.cache.get("836652115286949909");
        
            if (user.level <= 10) {
              userRoles.roles.add(newComer);
              userRoles.roles.remove(experienced);
              userRoles.roles.remove(expert);
              userRoles.roles.remove(professional);
              userRoles.roles.remove(legend);
            } else if (user.level > 10 && user.level <= 30) {
              userRoles.roles.remove(newComer);
              userRoles.roles.add(experienced);
              userRoles.roles.remove(expert);
              userRoles.roles.remove(professional);
              userRoles.roles.remove(legend);
            } else if (user.level > 30 && user.level <= 50) {
              userRoles.roles.remove(newComer);
              userRoles.roles.remove(experienced);
              userRoles.roles.add(expert);
              userRoles.roles.remove(professional);
              userRoles.roles.remove(legend);
            } else if (user.level > 50 && user.level <= 100) {
              userRoles.roles.remove(newComer);
              userRoles.roles.remove(experienced);
              userRoles.roles.remove(expert);
              userRoles.roles.add(professional);
              userRoles.roles.remove(legend);
            } else if (user.level > 100) {
              userRoles.roles.remove(newComer);
              userRoles.roles.remove(experienced);
              userRoles.roles.remove(expert);
              userRoles.roles.remove(professional);
              userRoles.roles.add(legend);
            }
          }
  }     
}