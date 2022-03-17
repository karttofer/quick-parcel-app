import path from 'path'
import { welcomeMessage, finalMessage, taskList } from './methods.js'

const actualPath = import.meta.url
const templatesDir = path
    .resolve(new URL(actualPath).pathname, '../../templates/default')
    .slice(3)

export async function cli(args) {
    welcomeMessage(args, `${process.cwd()}/${args}`)
    await taskList(templatesDir, `${process.cwd()}/${args}`)
    finalMessage(args, `${process.cwd()}`)
}
