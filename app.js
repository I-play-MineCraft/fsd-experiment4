// for running the code u have to open terminal and write node app.js but
// wait wait wait !
// before running the code u have to install some dependencies 
// open terminal and write 
// npm install node
// npm install express
//  now u can write node app.js




const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;
// Middleware to parse JSON data
app.use(bodyParser.json());
// Use the userRoutes module to handle routes related to users
app.use('/users', userRoutes);
// Default route
app.get('/', (req, res) => {
 res.send('Welcome to the Node.js Express Router Example!');
});
// Start the server
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});