const fs = require('fs');
const { Table } = require('console-table-printer');

module.exports = (client, Discord) => {
  const categories = fs.readdirSync('./commands/');
  
  const p = new Table({
    columns: [
      { name: `Index`, alignment:'center' },
      { name: `Command`, alignment:'left' },
      { name: `Status`, alignment:'center' }, 
  ]})
  let index = 1;
  for (const category of categories) {
    const commandFiles = fs.readdirSync(`./commands/${category}`).filter(File => File.endsWith('.js'));
    for (const file of commandFiles) {
      const command = require(`../commands/${category}/${file}`);
      if (command.name) {
        client.commands.set(command.name, command);
        p.addRow({ Index: index, Command: command.name, Status: '✅' });
        index = index + 1;
      } else {
        p.addRow({ index: index, text: command.name, status: '✅' });
        index = index + 1;
        continue;
      }
    }
  }
  p.printTable()
}