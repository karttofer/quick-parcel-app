# 🔥 Quick Parcel App 🚀

[![NPM](https://img.shields.io/npm/v/quick-parcel-app.svg)](https://www.npmjs.com/package/quick-parcel-app) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
</br>

## Warning 💥

<strong>Hi guys, I know Quick Parcel app have a problem in Mac Os it's so sad, but if you want you can help me to make grow up this project please share it. This project was created as a gift for the Parcel community.</strong>

Parcel (like Webpack) allows you to create React projects (and bundle different things such as images, files etc). With Parcel you don't need to
configure anything - everything is configured for you. Also, Parcel follows a very strong and strict philosophy:
"Be fast, be simple" (yeah, they don't say that in their website, but it's obvious). So, Quick Parcel App (this project) allows you to create a React application
without configuring anything

- [Main Website](https://parcelapp.netlify.com) - How to create a new app.</br>
- [Parcel Documentation](https://parceljs.org/) - Do you want to know more about Parcel?</br>
- [React Documentation](https://es.reactjs.org/) - You don't know anything about react?

If something doesn't work please create a new [issue](https://github.com/karttofer/parcel-app/issues/new).

# Quick Overview

```sh
npx quick-parcel-app <app-name>
cd <app-name>
npm start
```

The application will run at [http://localhost:1234/](http://localhost:1234/)</br>
If you are ready to publish to npm, you can run `npm run build`.

### Just run start

Parcel was created to make your project production fast. Using Parcel, you don't need to configure anything because everything was created for you.

### Create an app

**If you want to use Quick Parcel App you will need to have the latest version of Node.** You can download it through its website [here](https://nodejs.org/es/). With Quick Parcel App you only need to write the command and the project name, similar to `create-react-app <app-name>`.

## npx

```sh
  npx quick-parcel-app <app-name>
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

I had inspiration from create-react-app. I used this command a lot when I was a beginner. I know that I need to learn more about it, but I wanted to create something for the community and give something to the beginners to go under the hood more easily. Now, building a React project is easier!

### Why Parcel?

When I'm building a project I first think about if I will need to use Parcel or Webpack, because if you want to build a small application it's better to use Parcel - it's fast, easy and very small (compact).

### Methodology?

I'm trying to use git all the time, but sometimes I don't. Please don't be like me. I just followed this:

- I tried to study a lot.
- Watch a lot of videos about it (yeeep, this is the reality, Bro).
- Read posts about the topic written for people that have more experience than me.
- Advice: use git all the time.

### Can I take this code and improve it?

Yeah, everything on my GitHub is accessible and you can improve it or use it as an example. Just please, share my networks (if you want).

### Tools

`esm` allows you to use import. Treat to use it. More infomation [here](https://www.npmjs.com/package/esm).</br>
`listr` allows you to create a task list on the console. More infomation [here](https://www.npmjs.com/package/listr).</br>
`ncp` allows you to copy a file of a directory and paste in another. More infomation [here](https://www.npmjs.com/package/ncp).</br>
`shelljs` allows you to run shell commands. More infomation [here](https://www.npmjs.com/package/shelljs).</br>
`figlet` can allow you to use amazing fonts on the console. More information [here](https://www.npmjs.com/package/figlet).

## What’s Included?

We wanted to create a good environment for you, treating to use tools that can help you to create your projects easier.

- Test driven development for you react components using Jest and Enzyme.
- Css, Less and Stylus, parcel has everything configured for you in this manner can user different preprocessors.

## Future feactures

We want to keep improving Parcel-app making easier to use, having more tool that can help you to create easier your applications.

- SASS Support
- TypeScript Support

### License

Free use my guys ❤️
