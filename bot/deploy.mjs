import fs from 'fs/promises'
import path from 'path'

import { REST, Routes } from 'discord.js'
import { pathToFileURL } from 'url'

import config from '../config.json' with {
    type: 'json'
}

export async function Deploy() {


    const AllCommands = []

    const Load_Commands = async (folderpath) => {
        const commandfiles = await fs.readdir(folderpath)
        for (const file of commandfiles) {
            const filepath = path.join(folderpath, file)
            if ((await fs.stat(filepath)).isDirectory()) {
                await Load_Commands(filepath)
            } else if (file.endsWith('.mjs')) {
                const commandpath = pathToFileURL(filepath).href
                const command = await import(commandpath)
                if ('data' in command && 'execute' in command) {
                    AllCommands.push(command.data.toJSON())
                } else {
                    console.log(filepath)
                }
            }
        }
    }

    await Load_Commands(path.join(DIRNAME$, 'command'))

    const rest = new REST({
        version: '9'
    }).setToken(config['bot'].token)

    try {
        await rest.put(
            Routes.applicationGuildCommands(config['bot'].clientid,
                config['bot'].guildid), {
            body: AllCommands
        },)
    } catch (error) {
        console.log(error)
    }
}