const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./controller/articleController");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.Promise = Promise.global;

// connected to the localhost or the process env
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// morgan to help log issues
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use the routes in the controller folder to make the one page app work
app.use(routes);

// Start the server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});