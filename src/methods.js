	"use strict";
	import chalk  from 'chalk'
	import figlet from 'figlet'
	import ncp from 'ncp';
	import List from 'listr'
	import fs from 'fs'
	import shell from 'shelljs'
	import { spawn } from 'child_process'
	import { promisify } from 'util';
	import { Observable } from 'rxjs'
	import { Package } from '../templates/packageTemplate/packageTemplate.js'
	/* 
		This function will copy the files from the template directory 
		to the destination directory (The template directory will be where 
		the user ran the application) 

		clobber: will not overwrite destination files that already exist.
	*/
	const copy = promisify(ncp)
	const copyTemplateFiles = (templateDir, targetDir) => {
		return copy(templateDir, targetDir, {
			clobber: false
		});
	}
	const welcomeMessage = (projectName) => {
		console.log(`\rCreating a new project in: ${chalk.yellow(`./${projectName}`)}
			`);
		console.log(`Creating a packpage.json...`)
		console.log(`Getting neccesary dependencies. ${chalk.yellow('This can take a few minutes.')}
			`)
	};
	const finalMessage = (nameProject, targetDir) => {
		const message = `    ${chalk.cyan('Complete!')}, created ${chalk.magenta(nameProject)} at ${chalk.magenta(`./${nameProject}`)}\n    Inside of the project you can run the next ${chalk.cyan('commands')}:\n\n    ${chalk.cyan('npm')} start\n    Run the development server\n\n    ${chalk.cyan('npm')} build\n    Bundles the app into static files for production\n\n    ${chalk.cyan(`cd ${nameProject}`)}\n    ${chalk.cyan('npm ')}start\n\n    Good luck! ╚(ಠ_ಠ)=┐`
		console.log()
		console.log(message)
		shell.cd(targetDir)
		shell.exec('npm start')
		console.log('Runing server...')
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
					  return new Observable(observer => {
					  	 new Promise((resolve,reject) => {
					  			observer.next('@babel/core -> @babel/preset-env -> @babel/preset-react -> @babel/plugin-proposal-class-properties -> babel-jest');
					  			const babelDevs = spawn('npm i --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-jest', { shell: true });
					  			return babelDevs.on('exit', () => {
					  				observer.next('jest -> enzyme -> enzyme-adapter-react-16 -> enzyme-to-json');
					  				const testingDevs = spawn('npm i --save-dev jest enzyme enzyme-adapter-react-16 enzyme-to-json', { shell: true });
					  				return testingDevs.on('exit', () => {
					  					observer.next('react -> react-dom -> parcel-bundler');
					  					const baseDevs = spawn('npm i react react-dom parcel-bundler', { shell: true });
					  					return baseDevs.on('exit', () => {
					  						observer.complete();
					  						resolve();
					  					})
					  				})
					  			})
					  		})
					  	})
					  		  
		}
	},
		])
		await list.run()
	};
	export{
		welcomeMessage,
		taskList,
		finalMessage
	}
