const translateThis = require('@vitalets/google-translate-api');

module.exports = {
    translate(message, args, Discord) {
        if(!message.content) return;

        
        function isValidURL(string) {
            var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            return (res !== null)
          };
        
        let translatedMessage;

        if(isValidURL(message.content)){
            translatedMessage = message.content.replace(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,``);
            if(translatedMessage.length == 0) return;
            
        } else {
            translatedMessage = message.content;
        }
        
        translateThis(translatedMessage, {to: 'en'}).then(res => {
            if(res.from.language.iso === 'en') return;

            console.log(isValidURL(message.content))
            message.channel.send(`${message.author.nickname || message.author.username} : ${res.text}`)
        }).catch(err => {
            console.error(err);
        });
    }
}