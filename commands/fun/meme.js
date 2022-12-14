module.exports = {
    name: 'meme',
    description:"get a random photography meme.",
    execute(message, args, client, Discord, got){
      const embed = new Discord.MessageEmbed()
   got("https://www.reddit.com/r/PhotographyMemes/random/.json")
      .then((response) => {
        const [list] = JSON.parse(response.body);
        const [post] = list.data.children;

        const permalink = post.data.permalink;
        const memeUrl = `https://reddit.com${permalink}`;
        const memeImage = post.data.url;
        const memeTitle = post.data.title;
        const memeUpvotes = post.data.ups;
        const memeNumComments = post.data.num_comments;

        embed.setTitle(`${memeTitle}`);
        embed.setURL(`${memeUrl}`);
        embed.setColor("RANDOM");
        embed.setImage(memeImage);
        embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

        message.channel.send({embeds:[embed]});
      })
    }
}