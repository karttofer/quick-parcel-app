	"use strict"

	import chalk  from 'chalk'
	import figlet from 'figlet'
	import ncp from 'ncp';
	import List from 'listr'
	import fs from 'fs'
	import shell from 'shelljs'
	import { spawn } from 'child_process'
	import { promisify } from 'util';
	import { Package } from '../templates/packageTemplate/packageTemplate.js'

	// const _cliProgress = require('cli-progress');
	// const bar1 = new _cliProgress.SingleBar({}, _cliProgress.Presets.shades_classic);
	const {Observable} = require('rxjs');
	const copy = promisify(ncp)

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
		This function will copy the files from the template directory 
		to the destination directory (The template directory will be where 
		the user ran the application) 
		clobber: will not overwrite destination files that already exist.
	*/
	const copyTemplateFiles = (templateDir, targetDir) => {
		return copy(templateDir, targetDir, {
			clobber: false
		});
	}
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
				task: () => {// npm i --save-dev @babel/plugin-proposal-class-properties && npm i react react-dom @babel/core parcel-bundler
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

	/*
		{
					shell.cd(targetDir)
					return new Promise((resolve, reject) => {
					  bar1.start(200, 0);
					  bar1.update(1);
					  let command = 'npm i --save-dev @babel/plugin-proposal-class-properties && npm i react react-dom @babel/core parcel-bundler';
				      let process = spawn(command, { shell: true });
				      process.on('exit', () => {
				      	bar1.stop();
				        resolve();
				      })
				  })
				}	
			}

	*/
	export{
		welcomeMessage,
		taskList,
		finalMessage
	}
