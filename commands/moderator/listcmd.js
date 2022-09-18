const fs = require('fs');

module.exports = {
    name: 'listcmd',
    execute(message, args, client, Discord) {
    const categories = fs.readdirSync('./commands/');
    categories.forEach(folder =>{
        console.log(folder)
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(File => File.endsWith('.js'));
        commandFiles.forEach(cmd => {
            let cmdPoint = require(`../${folder}/${cmd}`);
            console.log(`${cmdPoint.name} - ${cmdPoint.description}`)
        })
    })
 }
}  