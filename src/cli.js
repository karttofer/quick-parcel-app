import path from 'path'
import os from 'os'
import { welcomeMessage, finalMessage, taskList } from './methods.js'

const actualPath = import.meta.url
const isWindows = os.platform() === 'win32' || os.platform() === 'win64'
const templatesDir = path.resolve(
    new URL(actualPath).pathname,
    '../../templates/default'
)

export async function cli(args) {
    welcomeMessage(args, `${process.cwd()}/${args}`)
    await taskList(
        isWindows ? templatesDir.slice(3) : templatesDir,
        `${process.cwd()}/${args}`
    )
    finalMessage(args, `${process.cwd()}`)
}
