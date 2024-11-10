import fs from 'fs/promises'
import path from 'path'

import config from '../../config.json' with {
    type: 'json'
}

/**
 * @param {import('discord.js').Client} client
 */

export async function execute(client) {
    try {
        if (!config.profile.pfp.alter || config.profile.pfp.changed) {
            return
        }

        await client.user.setAvatar(path.join('photo', 'f43bfe6b62b3c38002b3c1cb5100a11a.png'))
        config.profile.pfp.changed = true
        await fs.writeFile(path.join('..', 'config.json'), JSON.stringify(config, null, 3))
    } catch (error) {
        console.log(error)
    }
}

export const name = 'ready'