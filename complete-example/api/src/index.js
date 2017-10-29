const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('./session-store');
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

  app.use((req, res, next) => {
      // this should be handled in a more scalable way   
    if(req.path.indexOf('orders') > -1) {
        console.log('token', req.headers['x-token'])
        console.log('has token', session.checkSession(req.headers['x-token']))
        if(!session.checkSession(req.headers['x-token'])){
            res.status(401).send({});
            return;
        } 
    }
    next();
  })

const items = require('./routes/items');
const sections = require('./routes/sections');
const authentication = require('./routes/authentication');
const orders = require('./routes/orders');

app.use('/items/', items);
app.use('/sections/', sections);
app.use('/authentication/', authentication);
app.use('/orders/', orders);

app.get('/health', (req, res) =>{
    res.send({success:true});
})

app.listen(PORT_NUMBER, () => {
    Console.log('App listening on port ', PORT_NUMBER);
});

module.exports = app;