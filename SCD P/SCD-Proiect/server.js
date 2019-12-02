
const express = require('express');
const bodyparser = require('body-parser');
const appRoutes = require('./routes/appRoutes');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/",appRoutes);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
