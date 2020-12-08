//Import Express
const express = require('express'); 
//Import Routes

//Start up our server
const server = express(); 

//Global Middleware (to inlcude routes)
server.use(express.json()); 

server.get('/', (_, res) => {
  res.status(200).json({ api: "API UP AND RUNNING! SUPER NEAT STUFF!" });
});

module.exports = server;