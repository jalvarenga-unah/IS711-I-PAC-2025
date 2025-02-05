// Common JS
const os = require('node:os')

console.log(os.platform())
console.log(`${os.freemem() / 1024 / 1024 / 1024} GB`)