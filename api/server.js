const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:1234@yendono-llegando.diplpux.mongodb.net/?retryWrites=true&w=majority";

const app = express();
mongoose.connect(uri)
    .then(db => console.log("DB is connected, db:"))
    .catch(err => console.log(err))
// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares: funciones que procesan antes que lleguen las url
app.use(morgan('dev'));
app.use(express.json());

// Routes
// app.use(require('./routes/user'));


// Static files
app.use(express.static(__dirname + '/public'))


// Server is listening
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})