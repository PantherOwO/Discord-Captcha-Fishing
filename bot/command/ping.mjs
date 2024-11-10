import { SlashCommandBuilder } from 'discord.js'

/**
 * @param {import('discord.js').Interaction} interaction
 */

export async function execute(interaction) {
    await interaction.reply({
        'content': 'Pong!',
        'ephemeral': true
    })
}

export const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!')