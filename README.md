# React Fullstack Starter

![linting](https://github.com/mdfaizan7/react-fullstack-boilerplate/workflows/linting/badge.svg?branch=master)
![build](https://github.com/mdfaizan7/react-fullstack-boilerplate/workflows/build/badge.svg?branch=master)

This starter kit is designed to get you up and running with a Full-Stack project using bunch of awesome Tools and Technologies like TypeScript, React and Express.

The primary goal of this project is to provide a stable foundation upon which to build modern web appliications. Its purpose is not to dictate your project structure or to demonstrate a complete real-world application, but to provide a set of tools intended to make front-end development robust, easy, and, most importantly, fun.

## Table of Contents

1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Running the Project](#running-the-project)
1. [Continuous Integration (CI)](<#continuous-integration-(ci)>)
1. [Project Structure](#project-structure)
1. [Hot Reloading](#hot-reloading)
1. [Routing](#routing)
1. [HTTP Requests](#http-requests)
1. [Styling](#styling)
1. [Building for Production](#building-for-production)
   - [Deployment](#deployment)
   - [Static Deployments](#static-deployments)

## Requirements

- node `^8.0.0`
- yarn `^0.23.0` or npm `^3.0.0`

## Installation

After confirming that your environment meets the above [requirements](#requirements), you can create a new project by doing the following:

```bash
$ git clone https://github.com/mdfaizan7/react-fullstack-boilerplate.git <project-name>
$ cd <project-name>
```

When that's done, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn install # (or `npm install`)
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn dev  # Start the development server (or `npm run dev`)
```

While developing, you will probably rely mostly on `yarn dev`; however, there are additional scripts at your disposal:

| `yarn <script>` | Description                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `dev`           | Starts client on `localhost:8080` & server on `localhost:3000`                                                          |
| `build`         | Builds the application to ./dist                                                                                        |
| `test`          | Runs unit tests with Karma. See [testing](#testing)                                                                     |
| `watch-server`  | Runs server server in developement mode on `localhost:3000`                                                             |
| `watch-client`  | Runs client in developement mode on `localhost:8080`                                                                    |
| `server`        | Runs server on `localhost:3000`                                                                                         |
| `serve`         | Builds the file to ./dist and serve them using the server. The full app will start on `localhost:3000`                  |
| `lint`          | [Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors                    |
| `lint-fix`      | Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix) |

## Continuous Integration (CI)

This project uses Github Actions for CI. There are two tests:

- **Build:** For checking the Build.
- **Linting:** For linting.

_You can skip the CI builds in any push if you want by adding `[ci skip]` in your commit message._

## Project Structure

This structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications.

```
.
├── .github/workflows
│   ├── build.yml
│   └── linting.yml
├── node_modules
├── server
│   └── index.ts
├── client
│   ├── index.html
│   ├── index.tsx
│   ├── App.tsx
│   ├── pages
│   │   ├── home.tsx
│   │   └── page2.tsx
│   ├── manifest
│   │   └── manifest.json
│   ├── images
│   └── styles
├── .eslintrc
├── package.json
├── tsconfig.json
└── webpack.config.ts
```

## Hot Reloading

Hot reloading is enabled by default when the application is running in development mode (`yarn dev`). This feature is implemented with webpack's [Web Dev Server](https://github.com/webpack/webpack-dev-server) capabilities and [Nodemon](https://github.com/remy/nodemon).

## Routing

This project uses [react-router](https://reactrouter.com/web/guides/quick-start) for routing inside our app which uses navigational components that compose declaratively within the application.

## HTTP Requests

This project uses [axios](https://github.com/axios/axios) for making http requests which is Javascript library used to make HTTP requests from [node.js](https://nodejs.org/en/) or XMLHttpRequests from the browser that also supports the [ES6 Promise API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Styling

This project uses [sass-stylesheet](https://github.com/sass/sass) which is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a plugin for your build system.

## Building for Production

### Deployment

Out of the box, this project is deployable with SSR by building he production build by `yarn build` and then serving the `./dist` folder from the express server. This can be done by justing running `yarn serve` which will first build the files and then serve the whole app in `localhost:3000`.

_You can change the port by having an environment variable named PORT inside you `.env` file._

### Static Deployments

Serve the application with a web server such as nginx by pointing it at your `./dist` folder. Make sure to direct incoming route requests to the root `./dist/index.html` file so that the client application will be loaded; react-router will take care of the rest. If you are unsure of how to do this, you might find [this documentation](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#configuring-your-server) helpful. The Express server that comes with the starter kit is able to be extended to serve as an API by running `yarn server`, but is not required for a static deployment.
