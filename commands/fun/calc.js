const { Calculator } = require("weky");
module.exports = {
    name: 'calc',
    description:'use an interactive calculator with buttons!',
    usage:'',
    cooldown:'',
    async execute(message, args, client, Discord){

        await Calculator({
            message: message,
            embed: {
                title: 'Calculator',
                color: '#2F3136',
                timestamp: false
            },
            disabledQuery: 'Calculator is disabled!',
            invalidQuery: 'The provided equation is invalid!',
            othersMessage: 'Only <@{{author}}> can use the buttons!'
        });
  }     
}