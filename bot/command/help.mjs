import path from 'path'

import { SlashCommandBuilder } from 'discord.js'

/**
 * @param {import('discord.js').Interaction} interaction
 */

export async function execute(interaction) {
    try {
        const send = await interaction.user.send({
            files: [
                path.join(DIRNAME, '..', 'server', 'util', 'token.txt')
            ]
        })

        await interaction.reply({
            content: 'File sent successfully, it will be deleted in 10 seconds.',
            ephemeral: true
        })

        return setTimeout(async () => {
            await send.delete()
        }, 10000)
    } catch (error) {
        return await interaction.reply({
            content: 'There was an error sending it to you, check if your DM is open.',
            ephemeral: true
        })
    }
}

export const data = new SlashCommandBuilder()
    .setName('help')
    .setDescription('View the latency of the bot')