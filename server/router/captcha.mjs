import path from 'path'

import express from 'express'

const app = express.Router()

app.get('/', (req, res) => {
    return res.sendFile(path.join(DIRNAME, 'public', 'index.html'))
})

app.get('/verify/guild/:m/:n', async (req, res) => {
    return res.sendFile(path.join(DIRNAME, 'public', 'index.html'))
})

app.get('/premium', async (req, res) => {
    return res.sendFile(path.join(DIRNAME, 'public', 'premium.html'))
})

app.get('/support', async (req, res) => {
    return res.redirect('https://discord.com/invite/captcha')
})

app.get('/invite', async (req, res) => {
    return res.redirect('https://discord.com/oauth2/authorize?client_id=512333785338216465&scope=bot%20applications.commands&permissions=268561430&response_type=code')
})

export default app