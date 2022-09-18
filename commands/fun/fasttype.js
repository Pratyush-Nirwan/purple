const { FastType } = require("weky");
const txtgen = require('txtgen');
module.exports = {
    name: 'fasttype',
    description: 'see how fast can you type',
    usage: '',
    cooldown: '',
    async execute(message, args, client, Discord) {
        await FastType({
            message: message,
            embed: {
                title: 'FastType',
                description: 'You have **{{time}}** to type the below sentence.',
                color: '#2F3136',
                timestamp: false
            },
            sentence: txtgen.sentence(),
            winMessage: 'GG, you have a wpm of **{{wpm}}** and You made it in **{{time}}**.',
            loseMessage: 'Better luck next time!',
            cancelMessage: 'You ended the game!',
            time: 60000,
            buttonText: 'Cancel',
            othersMessage: 'Only <@{{author}}> can use the buttons!'
        });
    }
}