import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import { Client, GatewayIntentBits, Collection } from 'discord.js'
import { pathToFileURL } from 'url'

import { Deploy } from './deploy.mjs'
import config from '../config.json' with {
    type: 'json'
}

export default async () => {
    const __filename = fileURLToPath(import.meta.url)
    global.DIRNAME$ = path.dirname(__filename)

    await Deploy()

    const client = new Client({
        presence: {
            status: 'online'
        },
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildPresences
        ]
    })

    client.commands = new Collection()
    const AllCommands = []

    const LoadCommands = async (folderpath) => {
        const commandfiles = await fs.readdir(folderpath)
        for (const file of commandfiles) {
            const filepath = path.join(folderpath, file)

            if ((await fs.stat(filepath)).isDirectory()) {
                await LoadCommands(filepath)
            } else if (file.endsWith('.mjs')) {
                const commandpath = pathToFileURL(filepath).href
                const command = await import(commandpath)
                if (command.data && command.execute) {
                    client.commands.set(command.data.name, command)
                    AllCommands.push(command.data.toJSON())
                }
            }
        }
    }

    const LoadEvents = async (folderpath) => {
        const eventFiles = await fs.readdir(folderpath)
        for (const file of eventFiles) {
            const filepath = path.join(folderpath, file)

            if ((await fs.stat(filepath)).isDirectory()) {
                await LoadEvents(filepath)
            } else if (file.endsWith('.mjs')) {
                const eventpath = pathToFileURL(filepath).href
                const event = await import(eventpath)
                if (event.name && event.execute) {
                    client.on(event.name, (...args) => event.execute(
                        ...args,
                        client
                    ))
                }
            }
        }
    }

    await LoadCommands(path.join(DIRNAME$, 'command'))
    await LoadEvents(path.join(DIRNAME$, 'event'))

    client.login(config['bot'].token)
}