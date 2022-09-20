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
    if(interaction.isCommand()){
        await interaction.defer().catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName)
        
        if(!cmd)
            return interaction.followUp({content: "An error has occured"});

        const args = [];
        interaction.options.array().map((x)=> {
            args.push(x.value);
        });

        cmd.run(client, interaction, args);
    }
} 