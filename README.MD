# Parcel App 🚀
Parcel as webpack allows you to create react projects (and bundler different things as images, files etc), but with parcel you don't need to
configure anything, everything with parcel already was configured for you. Also, Parcel follow a very strong and strict philosophy 
"Be fast, be simple" (yeah, they don't say that in their website), but it's obvious. So, parcel app allows creating a react application
without configuring anything.

- [Our Web](https://parcelapp.netlify.com) - How to create a new app.</br>
- [Parcel Documentation](https://parceljs.org/) - Do you want to know more about Parcel?</br>
- [React  Documentation](https://es.reactjs.org/) - You don't know anything about react?.
  
If something doesn't works please create a new [issue](https://github.com/karttofer/parcel-app/issues/new)

# Quick Overview
```sh
npx parcel-app app-name
cd app-name
npm start
```
The application going to run at [http://localhost:1234/](http://localhost:1234/)</br>
If you are ready to publish to npm, you can run `npm run build`
<p align="center">
  <img width="720" height="420" src="https://j.gifs.com/xn9P3z.gif">
</p>

### Just run start
Parcel was create to make fast your project production, using parcel you don't need to configure anything because everything was created for you.

### Create an app
**If you want to use Parcel App you will need to have the latest version of node**, you can dounwload it throug
its website [node](https://nodejs.org/es/). With parcel app you only need to write the command and the project name this following the command
of </br>`create-react-app <app-name>`.

## npx
```sh
  npx parcel-app <app-name>
```
## Tree
```
<app-name>
├── node_modules
├── public
|   ├── index.html
├── src
|   ├── App.js
|   ├── index.js
|   ├── style.css
├── .babelrc
├── package.json
```

### Inspiration
I had inspiration for create-react-app, this command that I used a lot when I was more beginner, right now I know that I need to learn more about it but right now I know that I can to create something for the community and give something to the beginners to go under the hood easier doing that build a react project was easier.

### Why Parcel?
When I'm building a project I first think about if I will need to use Parcel or Webpack, because if you want to build a small application
it's better to use Parcel, it's fast, easy and very small (compact). 

### You followed any methodologie?
I'm triying to use all the time git, but sometimes I don't know why I don't use it, please don't be like me. I just followed this:
was:
- I tried to study a lot.
- Wacth a lot of videos about it (Yeeep, this is the reality bro).
- Learn post about the topic wrote for people that have more experience than me.
- Advice: use git all the time.

### Can I take this code and improve?
Yeah, everything on my github it's accesible and you can improve or use as example. Just please, share my networks (if you want).

### Tools
`esm` esm allows you to use import. Treat to use it. More infomation [esm](https://www.npmjs.com/package/esm)</br>
`listr` listr allows you create task list on the console. More infomation [listr](https://www.npmjs.com/package/listr)</br>
`ncp` ncp allows you to copy a file of a directory and paste in another. More infomation [ncp](https://www.npmjs.com/package/ncp)</br>
`shelljs` with shelljs you can run commands. More infomation [shelljs](https://www.npmjs.com/package/shelljs)</br>
`figlet` with figlet you can show on console amazing fonts. More information [figlet](https://www.npmjs.com/package/figlet)

### Nex freactures
- React optimizer
- Testing command
- ESlint

### Liscence
MIT © Jhornan Colina [MIT License](https://github.com/karttofer/parcel-app/blob/master/LICENSE)