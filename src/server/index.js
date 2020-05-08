const express = require('express');
const http = require('http');
const socket = require('./lib/socket');
const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);

app.use(express.static('dist'));

server.listen(process.env.PORT || 8080, () => {
  socket(server);
  console.log('Server is listening at :', PORT);
});
