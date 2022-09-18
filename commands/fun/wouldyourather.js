const { WouldYouRather } = require('weky')
module.exports = {
    name: 'wouldyourather',
    description:'play the game would you rather',
    usage:'',
    cooldown:'',
    async execute(message, args, client, Discord){
        await WouldYouRather({
            message: message,
            embed: {
                title: 'Would you rather...',
                color: '#2F3136',
                timestamp: true,
            },
            thinkMessage: 'I am thinking',
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            buttons: { optionA: 'Option A', optionB: 'Option B' },
        });
  }     
}