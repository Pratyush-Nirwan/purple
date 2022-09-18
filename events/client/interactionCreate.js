module.exports = async (Discord, client, interaction) => {
    if (interaction.isButton()) {
        try {
            await client.buttons.get(`${interaction.customId}.js`).run(Discord, interaction)
        } catch (error) {
            return;
        }
    }
    if(interaction.isSelectMenu()){
        try {
            await client.menubuttons.get(`${interaction.values[0]}.js`).run(Discord, interaction)
        } catch (error) {
            return;
        }
    }
}