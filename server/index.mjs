import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

import login from './router/login.mjs'
import captcha from './router/captcha.mjs'

export default async () => {
    const __filename = fileURLToPath(import.meta.url)
    global.DIRNAME = path.dirname(__filename)

    const app = express()

    app.set('trust proxy', true)
    app.use(express.json())
    app.use(express.static(path.join(DIRNAME, 'public')))

    app.use(login)
    app.use(captcha)

    app.use(async (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next()
    })

    app.options('*', async (req, res) => {
        return res.status(200).send('')
    })

    app.use((req, res) => {
        return res.redirect('/')
    })

    app.listen(80, () => {
        console.log('Server running.')
    })
}