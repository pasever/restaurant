// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


var waitlist = [];
var tables = [];

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// serves up reservation
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

// serves up reservation
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

//serves up waitlist JSON object
app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});

//serves up waitlist JSON object
app.get("/api/tables", function(req, res) {
  res.json(tables);
});






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});