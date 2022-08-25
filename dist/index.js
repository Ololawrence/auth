"use strict";

var express = require('express');

var app = express();
var port = 5001 || process.env.PORT;
app.get("this is the app entry point and thank you for all of this!");
app.listen(port, function (req, res) {
  console.log("app runing on port ".concat(port));
});