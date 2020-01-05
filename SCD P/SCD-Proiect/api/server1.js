const express = require('express');
const bodyparser = require('body-parser');
const registeringRoutes = require('./routes/registeringRoutes');

var cors = require('cors');
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(cors());
app.use("/",registeringRoutes);

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
