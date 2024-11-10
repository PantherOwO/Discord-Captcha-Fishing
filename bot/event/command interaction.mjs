import config from '../../config.json' with {
    type: 'json'
}

/**
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Interaction} interaction
 */

export async function execute(interaction, client) {
    if (!interaction.isChatInputCommand()) {
        return
    }

    if (String(interaction.user.id) !== String(config.owner.id)) {
        return await interaction.reply({
            content: 'You do not have permission to use this command.',
            ephemeral: true
        })
    }

    const command = interaction.client.commands.get(interaction.commandName)

    if (!command) {
        return
    }

    try {
        await command.execute(interaction, client)
    } catch (error) {
        console.log(error)

        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: 'There was an error executing this command!',
                ephemeral: true
            })
        } else {
            await interaction.reply({
                content: 'There was an error executing this command!',
                ephemeral: true
            })
        }
    }
}

export const name = 'interactionCreate'