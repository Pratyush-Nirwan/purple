const Levels = require("discord-xp");
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Purple is online'));

app.listen(port, () => console.log(`This app is listening at http://localhost:${port}`));

const Discord = require('discord.js');
const {Intents} = require('discord.js');
const client = new Discord.Client({ 
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'] ,
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],

});
module.exports = client;


const fs = require('fs');
const guild = client.guilds.cache.get('807571263001591818');

const mongoose = require('mongoose')
const mongo_db = 'mongodb+srv://urprobokeh:pratyush1588283@bokehutils.82kha.mongodb.net/BokehUtilsDB?retryWrites=true&w=majority'
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.buttons = new Discord.Collection();
client.menubuttons = new Discord.Collection();

fs.readdir("./buttons/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter((f) => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("No buttons.");
    return;
  }

  jsfile.forEach((f) => {
    let props2 = require(`./buttons/${f}`);
    client.buttons.set(f, props2);
  });
});

fs.readdir("./menubuttons/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter((f) => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("No menu buttons.");
    return;
  }

  jsfile.forEach((f) => {
    let props2 = require(`./menubuttons/${f}`);
    client.menubuttons.set(f, props2);
  });
});
['command_handler', 'events_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
})
Levels.setURL(mongo_db);
mongoose.connect(mongo_db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to the Database');
}).catch((err) => {
  console.log(err);
})

client.login('ODA3NTY4NTk3MzcwNjY3MDI4.YB543Q.mHK2AOqCxcF8dwYVRXgHzPfqjUE')
