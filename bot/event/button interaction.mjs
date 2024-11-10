import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from 'discord.js'

import random$string from '../module/random string.mjs'
import config from '../../config.json' with {
    type: 'json'
}

/**
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').interaction} interaction
 */

export async function execute(interaction) {
    if (!interaction.isButton()) {
        return
    }

    if (interaction && interaction.customId === 'why') {
        const invite = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Secure your server')
                    .setURL('https://captcha.bot/invite')
                    .setStyle(ButtonStyle.Link)
            )


        return (await interaction.reply({
            content: `This server is protected by https://captcha.bot/ to prevent raids & malicious users. You can protect your server by inviting Captcha.bot here: https://captcha.bot/invite.

To gain access to this server you will need to verify yourself by completing a captcha.

❓ **What can Captcha.bot do?**
\`-\` View your name and avatar. It does not have access to control your account.
\`-\` View which servers you have joined`,
            components: [
                invite
            ],
            ephemeral: true
        }))
    }

    if (interaction && interaction.customId === 'verify') {
        const embed = new EmbedBuilder()
            .setTitle(`Please verify yourself to gain access to ${interaction.guild.name}`)
            .setColor('#2c63b0')
            .setDescription(`Please complete this captcha to prove you are a human: [Click here](${config['domain'].url}/verify/guild/${interaction.guild.id}/${await random$string('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 86)})`)

        const verify = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('only')
                    .setLabel('ONLY verify on https://captcha.bot')
                    .setDisabled(true)
                    .setStyle(ButtonStyle.Secondary)
            )

        return await interaction.reply({
            embeds: [
                embed
            ],
            components: [
                verify
            ],
            ephemeral: true
        })
    }
}

export const name = 'interactionCreate'