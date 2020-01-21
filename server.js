const express = require("express");
const bodyParser = require('body-parser');  
const mongoose = require('mongoose');
const path = require('path');
 
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "./public/dist/public")));
mongoose.connect('mongodb://localhost/examdb2');
require('./server/config/mongoose.js'); 
require('./server/config/routes.js')(app) 
app.listen(8000, () => {console.log('Listening on port 8000')})

