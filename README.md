# WebRTC-React-Node

Try it here: https://fsociety-chat.herokuapp.com/

## Introduction
This is a boilerplate to build a full stack video chat application using React, WebRTC, Node.js, Express and Webpack. It is also configured with webpack-dev-server, eslint, prettier and babel.

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

## Quick Start

```bash
# Clone the repository
https://github.com/sahilnare/WebRTC-React-Node.git

# Go inside the directory
cd WebRTC-React-Node

# Install dependencies
yarn (or npm install)

# Start development server
yarn dev (or npm run dev)

# Build for production
yarn build (or npm run build)

# Start production server
yarn start (or npm start)
```
