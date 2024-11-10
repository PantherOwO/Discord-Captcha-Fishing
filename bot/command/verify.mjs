import {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} from 'discord.js'

/**
 * @param {import('discord.js').Interaction} interaction
 */

export async function execute(interaction) {
    const embed = new EmbedBuilder()
        .setTitle('🤖 Verification required')
        .setColor('#2c63b0')
        .setDescription('To gain access to \`' + interaction.guild.name + '\` you need to prove you are a human by completing a captcha. Click the button below to get started!')

    const only = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('only')
                .setLabel('ONLY verify on https://captcha.bot')
                .setDisabled(true)
                .setStyle(ButtonStyle.Secondary)
        )

    const verify = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('verify')
                .setEmoji('🤖')
                .setLabel('Verify')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('why')
                .setLabel('Why?')
                .setStyle(ButtonStyle.Secondary)
        )

    await interaction.channel.send({
        embeds: [
            embed
        ],
        components: [
            only,
            verify
        ]
    })

    return await interaction.reply({
        content: 'Message sent successfully!',
        ephemeral: true
    })
}

export const data = new SlashCommandBuilder()
    .setName('verify')
    .setDescription('Start the verification process. You will be DMed a captcha or a link')