/* 
Steps for Todays Project: 

1.) Build DB

2.) Flesh out CRUD Back End

3.) Implement Middleware

4.) MAYBEEEE Make a simple UI to maniupulate Table ?!?!?!
- Yeah who am I kidding - optional React lol
*/

const server = require('./api/server'); 

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n-- Server Listening on port ${PORT} --\n`);
});