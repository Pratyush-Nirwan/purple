const didYouMean = require('didyoumean2').default
const { readdirSync } = require("fs");
const test = require('../')
module.exports = {
    async findSimilarCmd(message, cmd, Discord) {
        var commands =[];
        var cmds;
        readdirSync("./commands/").forEach((dir) => {
            commandname = readdirSync(`./commands/${dir}/`).filter((file) =>
                file.endsWith(".js")
            );
            commands.push(commandname);
              commands = commands.flat();
        });
        var cmdlist = commands.map(function(x){return x.replace(/.js/g, '');});
        var match = didYouMean(cmd, cmdlist);
        if(match == null) return;
        message.reply({content:`Did you mean \`p!${match}\`?`});
    }
}