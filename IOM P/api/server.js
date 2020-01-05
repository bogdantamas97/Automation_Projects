const express = require('express');
const bodyparser = require('body-parser');
const routing = require('./routes/routing');

var cors = require('cors');
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(cors());
app.use("/",routing);

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});