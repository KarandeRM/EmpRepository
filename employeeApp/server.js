const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors =  require('cors');

const api = require('./server/routes/api');
const port = 3000;


const app = express();


app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

app.use('/api', api);

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);
    if (req.method == 'OPTIONS') {
        res.statusCode = 200;
        res.end();
        next.onOptions();
        return;
    }
    // Pass to next layer of middleware
    next();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});