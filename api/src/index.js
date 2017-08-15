const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT_NUMBER = 8000;
const Console = console;

app.use(cors({
  "origin": "*",
  "methods": "GET,PUT,POST",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup cors manually
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // should really be more targeted
//     res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS')
//     res.setHeader('Access-Control-Allow-Headers', 'content-type') // critical if you want to set the content type in the client
//     next();
// });

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