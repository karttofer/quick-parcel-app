/*
	* This file will run our methods from the methods.js file
      it will also pass as targetDir parameters (directory where
      the project is created) and the name given by the user to
      the project (args)

*/
import shell from 'shelljs'
import path from 'path'
import { welcomeMessage, finalMessage, taskList } from './methods.js'
const actualPath = import.meta.url
const templatesDir = path
  .resolve(new URL(actualPath).pathname, '../../templates/default')
  .slice(3)
export async function cli(args) {
  welcomeMessage(args, `${process.cwd()}/${args}`)
  await taskList(templatesDir, `${process.cwd()}/${args}`, args)
  finalMessage(args, `${process.cwd()}`)
}
