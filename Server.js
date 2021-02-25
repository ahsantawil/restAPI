const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let port = 5000;

// parse aplication / json 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});