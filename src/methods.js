/*
      This file saves all the functions that we will have to use to be able to
      Run the command appropriately. To make everything run well,
      I need to make some imports that allow me to make it work
      All in the right way.
      
      * chalk: allows us to have text of different colors.
      * ncp: we will use it to copy and drop files in a given address.
      * shell: allows us to execute command and in this case also enter the directory
        of the user to run the project.
      * spawn: we use spawn to install the necessary packages, we don't use shell since
        This does not give us the same utilities as spawn and thus avoid mistakes.
      * rxjs: in combination with rxjs it will allow us to show the user the packages that are being downloaded.
      * Packpage from packpageTemplate.js: we have a json packpage template and we will need to create it
        within the project directory, for this we import it first and thus have access to it.

--------FUNCTIONS

      * copyTemplateFiles: allows us to obtain the template files that will be the ones we will use
        to create the project and then paste them into the target directory. Inside also has
        Clobber allowing us not to rewrite files.
      * welcomeMessage: it will be the first thing the user will be giving him necessary information about what
        It will happen while the command is executed.
      * finalMessage: the last thing that the user will see of the command and that will give the steps to follow for
        To be able to execute the project.
      * taskList: this function uses "listr" to create a list of tasks, in this way
        separate each process from the command and be able to show the user what is happening.
  */
'use strict'
import chalk from 'chalk'
import ncp from 'ncp'
import List from 'listr'
import fs from 'fs'
import shell from 'shelljs'
import { spawn } from 'child_process'
import { promisify } from 'util'
import { Observable } from 'rxjs'
import { Package } from '../templates/packageTemplate/packageTemplate.js'
const copy = promisify(ncp)
const copyTemplateFiles = (templateDir, targetDir) => {
  return copy(templateDir, targetDir, {
    clobber: false,
  })
}
const welcomeMessage = projectName => {
  console.log()
  console.log(`    Creating a new project in: ${chalk.yellow(
    `./${projectName}`
  )}
			`)
  console.log(`    Creating a packpage.json...`)
  console.log(`    Getting neccesary dependencies. ${chalk.yellow(
    'This can take a few minutes.'
  )}
      `)
}
const finalMessage = (nameProject, targetDir) => {
  const message = `    ${chalk.cyan('Complete!')}, created ${chalk.magenta(
    nameProject
  )} at ${chalk.magenta(
    `./${nameProject}`
  )}\n    Inside of the project you can run the next ${chalk.cyan(
    'commands'
  )}:\n\n    ${chalk.cyan(
    'npm'
  )} start\n    Run the development server\n\n    ${chalk.cyan(
    'npm'
  )} build\n    Bundles the app into static files for production\n\n    ${chalk.cyan(
    `cd  ${nameProject}`
  )}\n    ${chalk.cyan('npm ')}start\n\n    Good luck! ╚(ಠ_ಠ)=┐`
  console.log()
  console.log(message)
  console.log()
  console.log('    Runing development server....')
  shell.cd(targetDir)
  return shell.exec('npm start')
}
const taskList = async (templateDir, targetDir) => {
  const list = new List([
    {
      title: 'Building Folder',
      task: () => copyTemplateFiles(templateDir, targetDir),
    },
    {
      title: 'Building package',
      task: () => {
        shell.cd(targetDir)
        fs.writeFile('package.json', JSON.stringify(Package, null, 4), function(
          err
        ) {
          if (err) throw err
        })
      },
    },
    {
      title: 'Gettings Dependencies...',
      task: () => {
        return new Observable(observer => {
          new Promise(resolve => {
            observer.next(
              `@Babel dependencies`
            )
            const babelDevs = spawn(
              'npm i --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-jest',
              { shell: true }
            )
            return babelDevs.on('exit', () => {
              observer.next(
                '@Testing dependencies'
              )
              const testingDevs = spawn(
                'npm i --save-dev jest enzyme enzyme-adapter-react-16 enzyme-to-json',
                { shell: true }
              )
              return testingDevs.on('exit', () => {
                observer.next('@Base dependencies')
                const baseDevs = spawn(
                  'npm i react react-dom parcel-bundler prettier',
                  { shell: true }
                )
                return baseDevs.on('exit', () => {
                  observer.complete()
                  resolve()
                })
              })
            })
          })
        })
      },
    },
  ])
  await list.run()
}

export { welcomeMessage, taskList, finalMessage }
