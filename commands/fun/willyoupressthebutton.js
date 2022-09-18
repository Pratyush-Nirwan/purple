const { WillYouPressTheButton } = require('weky')
module.exports = {
    name: 'willyoupressthebutton',
    description:'play the game would you rather',
    usage:'',
    cooldown:'',
    async execute(message, args, client, Discord){
      await WillYouPressTheButton({
        message: message,
        embed: {
          title: 'WillYouPressTheButton',
          description: '```{{statement1}}```\n**but**\n\n```{{statement2}}```',
          color: '#2F3136',
          timestamp: true,
        },
        button: { yes: 'Yes', no: 'No' },
        thinkMessage: 'I am thinking',
        othersMessage: 'Only <@{{author}}> can use the buttons!',
      });
  }     
}