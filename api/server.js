//Import Express
const express = require('express'); 
const morgan = require('morgan');
//Import Routes
const CarRouter = require('./cars/car-router');
//Start up our server
const server = express(); 

//Global Middleware (to inlcude routes)
server.use(express.json()); 
server.use(morgan('tiny'));
server.use('/api/cars', CarRouter);

server.get('/', (_, res) => {
  res.status(200).json({ api: "API UP AND RUNNING! SUPER NEAT STUFF!" });
});

module.exports = server;