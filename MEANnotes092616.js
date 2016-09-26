// build out server file

'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

// then add middleware
// if i want the client folder to be the static folder, i don't do ../
//   just put 'client' in the static because, express executes where the nodeModules folder is
app.use(express.static('client'))


app.listen(port, () => console.log(`listening on port: ${port}`);)

// 
in package.js change start script, to 
"start": "node server/server.js"
and change main file to 
server/server.js
  
// then can run npm start and will start the server



// #########

<!DOCTYPE html>
<html>
  <head>
    <title>MEAN 101</title>
  </head>
  <body>
    <h1>MEAN 101</h1>
    NEED A SCRIPT TAG HERE TO SOME SORT OF ANGULAR PROJECT
    <script src=""></script>
  </body>
</html>


// ##############

// npm install bower and save as a dev dependency

// add bower to .bin folder in node_modules folder
// if i use bower init, it will use the global install
// so save bower as a dev dependency
bower init
npm install bower --save-dev
// this uses the local install
node_modules/.bin/bower init




