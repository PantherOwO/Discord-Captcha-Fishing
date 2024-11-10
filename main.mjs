import punycode from 'punycode'

console.clear()
process.title = ''

import bot from './bot/index.mjs'
import server from './server/index.mjs'

await bot()
await server()