const bodyParser = require('body-parser');
const express = require("express");
var cors = require('cors');
var routes = require('./config/index');

var app = express();
const corsOptions = {
    origin: '*'
}


//Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', cors(corsOptions), routes);
app.get('/', (req, res) => res.send('Welcome to FitnessAPI'));

const server = app.listen(process.env.development_port || 8000, () => {
    console.log(`http://localhost:${server.address().port}`)
})