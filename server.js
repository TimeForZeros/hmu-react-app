const express = require("express");
const path = require("path");
const logger = require("morgan");
const favicon = require("serve-favicon");

const app = express();

require('dotenv').config();
require('./config/database');

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));



//APIs
app.use('/api/users', require('./routes/api/users'));
app.use('/api/events', require('./routes/api/events'));


//This is for routing
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

// app.listen(port, function() {
// });
