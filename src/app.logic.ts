import fs from 'fs'
import { yarg } from './config/plugins/yargs.plugin'

const { b: base, l: limit, s: show } = yarg
let message: string = ''
const headerMessage = `
===================
    Tabla del ${base}
===================
`
const outputPath = `outputs`

for (let i = 1; i <= limit; i++) {
    message += `${base} x ${i} = ${base * i}\n`
}

message = headerMessage + message

if (show) console.log(message)

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, message)
console.log('File created')