const express = require('express');
const bodyparser = require('body-parser');
const locationsRoutes = require('./routes/locationsRoutes');

var cors = require('cors');
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(cors());
app.use("/",locationsRoutes);

app.listen(9000, () => {
    console.log("Server is listening on port 9000");
});
