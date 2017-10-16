const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT_NUMBER = 8000;
const Console = console;

// helmet js is a better choice for production
app.use(cors({
  "origin": "*",
  "methods": "GET,PUT,POST",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(nocache);

function nocache(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
  }

const items = require('./routes/items');
const sections = require('./routes/sections');
const authenticatiion = require('./routes/authentication');
const orders = require('./routes/orders');

app.use('/items/', items);
app.use('/sections/', sections);
app.use('/authentication/', authenticatiion);
app.use('/orders/', orders);

app.get('/health', (req, res) =>{
    res.send({success:true});
})

app.listen(PORT_NUMBER, () => {
    Console.log('App listening on port ', PORT_NUMBER);
});

module.exports = app;