const fs = require('fs');
let reply_data = fs.readFileSync("./replies.txt").toString();
let replies = reply_data.split("\n");

module.exports = async (client, Discord) => {
  const chat = client.channels.cache.get('788872012884869181');
  setInterval(() => {
    const guild = client.guilds.cache.get("776107860694007808");
    let random = Math.floor(Math.random() * replies.length-1);

    if(chat.lastMessage.author.id != client.user.id ){
      chat.send({content:replies[random]});
    }
  }, 28800000);
}
