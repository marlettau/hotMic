const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

 // more code will go in here just befor the listening function

app.listen(3000, function () {
    console.log("Listening on port 3000!");
});
