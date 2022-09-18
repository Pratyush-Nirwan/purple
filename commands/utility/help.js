
const { readdirSync } = require("fs");
const { MessageEmbed } = require("discord.js");
const prefix = 'p!';

module.exports =  {
    name: 'help',
    description:"get help regarding bot.",
    usage: '(command name)',
    execute(message, args, client, Discord){
 
    if (!args[0]) {
      let categories = [];
      const dirEmojis = {
        fun:'🎉',
        moderator:'🛡',
        rank:'🏅',
        utility:'🔨',
      }
      readdirSync("./commands/").forEach((dir) => {
        const editedName = `${dirEmojis[dir]} ${dir.toUpperCase()}`
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );
        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);
          if (!file.name) return "No command name.";
          let name = file.name.replace(".js", "");
          if(name === 'reload' || name === 'leaderboard' || name === 'boostperks' || name === 'rules' || name === 'reactionroles'|| name === 'eval'){
            return;
          } else {
          return `\`${name}\`      \u200b`;
          }
        });

        let data = new Object();
        data = {
          name: `${editedName}`,
          value: cmds.length === 0 ? "In progress." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setTitle("📬 Need help? Here are all of my commands:")
        .addFields(categories)
        .setThumbnail('https://i.imgur.com/fqzzc1Y.jpg')
        .setDescription(
          `Use \`${prefix}help\` followed by a command name to get more additional information on a command. For example: \`${prefix}help ping\`.`
        )
        .setColor('#2F3136');
      return message.channel.send({embeds: [embed]})
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`)
          .setColor("FF0000");
        return message.channel.send({embeds: [embed]})
      }

      const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .setDescription("`<>` means needed and `()` means it is optional but don't include those.")
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` **,** `")}\``
            : "No aliases for this command."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "COOLDOWN:",
          command.cooldown
            ? `${command.cooldown} Seconds`
            : "No cooldown for this command."
        )
        .addField(
          "DESCRIPTION:",
          command.description
            ? command.description
            : "No description for this command."
        )
        .setThumbnail('https://i.imgur.com/fqzzc1Y.jpg')
        .setColor('#2F3136');
      return message.channel.send({embeds: [embed]})
    }
  },
};
