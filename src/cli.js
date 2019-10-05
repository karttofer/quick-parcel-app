import shell from 'shelljs'
import path  from 'path'
import { welcomeMessage, finalMessage ,taskList } from './methods.js' 
/* 
	cli function will have an important paper on the project
	because it will pass the args (the text that user wrote
	in this case the name of the application).

	Apart, cli will call everything from methods.js

	Why async await?

	We need to wait until the taskList method finish the process for 
	run the final message function.
*/
const actualPath = import.meta.url;
const templatesDir = path.resolve(new URL(actualPath).pathname,'../../templates/default',
).slice(3)
export async function cli(args) {
	welcomeMessage();
	await taskList(templatesDir,`${process.cwd()}/${args}`, args);
	//finalMessage(args);
}