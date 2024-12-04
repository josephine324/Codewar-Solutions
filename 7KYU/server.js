const express = require('express');
const App = express();

App.get("/", function (req, res) {
res.send("Hello World")
});

App.listen(3000);