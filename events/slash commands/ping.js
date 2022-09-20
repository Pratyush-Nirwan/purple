const {CommandInteraction, Client, WebhookClient} = require("discord.js");
const interactionCreate = require("../client/interactionCreate");

module.exports = {
    name: "test",
    description: "this is a testing command",

    run: async (client, interaction, args) => {},
};