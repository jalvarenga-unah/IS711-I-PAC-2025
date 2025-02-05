// ES Modules
import { platform, freemem, uptime } from 'node:os'

console.log(platform())
console.log(`${freemem() / 1024 / 1024 / 1024} GB`)
console.log(`${uptime() / 60 / 60} hours`)