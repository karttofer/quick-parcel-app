	import chalk  from 'chalk'
	import figlet from 'figlet'
	import ncp from 'ncp';
	import List from 'listr'
	import fs from 'fs'
	import shell from 'shelljs'
	import { spawn } from 'child_process'
	import { promisify } from 'util';
	import { Package } from '../templates/packageTemplate/packageTemplate.js'
	const ProgressBar = require('progress');

	let bar = new ProgressBar(':bar', { total: 10 });

	/* 
		COPY FUNCTION 

		This function will copy the files from the template directory 
		to the destination directory (The template directory will be where 
		the user ran the application) 

		clobber: will not overwrite destination files that already exist.
	*/
	const copy = promisify(ncp);
	const copyTemplateFiles = (templateDir, targetDir) => {
		return copy(templateDir, targetDir, {
				clobber: false
		});
	};
	const welcomeMessage = () => {
		return console.log(figlet.textSync(' parcel-app', {
				    font: 'standard',
				    horizontalLayout: 'default',
				    verticalLayout: 'default'
			}));
	};
	const finalMessage = name => {
		const message = `    ${chalk.cyan('Complete!')}, created ${chalk.magenta(name)} at ${chalk.magenta(`./${name}`)}\n    Inside of the project you can run the next ${chalk.cyan('commands')}:\n\n    ${chalk.cyan('npm')} start\n    Run the development server\n\n    ${chalk.cyan('npm')} build\n    Bundles the app into static files for production\n\n    ${chalk.cyan(`cd ${name}`)}\n    ${chalk.cyan('npm ')}start\n\n    Good luck! ╚(ಠ_ಠ)=┐`
		console.log(message)
	};
	/*
	 taskList function created a task list to see what is happening while the parcel-app command is running.
	
		- Building project
		- Building package
		- Gettings Dependencies...

	*/
	const taskList = async (templateDir,targetDir, projectName) => {
		const list = new List([
			{
				title: 'Building Folder',
				task: () => copyTemplateFiles(templateDir, targetDir),
			},
			{
				title: 'Building package',
				task: () => {
					shell.cd(targetDir)
					   fs.writeFile("package.json", JSON.stringify(Package, null, 4), function(err){
					     if (err) throw err;
					 });
				}
			},
			{
				title: 'Gettings Dependencies...',
				task: () => {
					shell.cd(targetDir)
					return new Promise((resolve, reject) => {
					  let command = 'npm i --save-dev @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react jest enzyme enzyme-adapter-react-16 babel-jest && npm i react react-dom @babel/core parcel-bundler';
				      let process = spawn(command, { shell: true });
						let timer = setInterval(function () {
						  bar.tick();
						}, 100);
				      process.on('exit', () => {
				      	bar.hide();
				      	clearInterval(timer);
				        resolve();
				      })
				  })
				}	
			}
		])
		await list.run()
	};
	export{
		welcomeMessage,
		taskList,
		finalMessage
	}
	