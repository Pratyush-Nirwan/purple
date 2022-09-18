const { Snake } = require("weky");
module.exports = {
    name: 'snake',
    description:'play the snake game.',
    usage:'',
    cooldown:'',
    async execute(message, args, client, Discord){
      await Snake({
        message: message,
        embed: {
          title: 'Snake',
          description: 'GG, you scored **{{score}}** points!',
          color: '#2F3136',
          timestamp: false
        },
        emojis: {
          empty: '⬛',
          snakeBody: '🟩',
          food: '🍎',
          up: '⬆️',
          right: '⬅️',
          down: '⬇️',
          left: '➡️',
        },
        othersMessage: 'Only <@{{author}}> can use the buttons!',
        buttonText: 'Cancel',
      });
  }     
}