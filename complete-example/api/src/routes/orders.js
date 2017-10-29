const express = require('express');
const router = express.Router();
const dataorders = require('../data/orders');

router.get('/user/:id', (req, res) => {
    console.log( req.params.id)
    const orders = dataorders.orders.filter((element) => element.userid === parseInt(req.params.id));
    
    if (!orders) {
        return res.status(404).send({
            success: false,
        });
    }

    console.log( orders)
    res.send({
        success: true,
        orders,
    }).end();
})

router.put('/:id', (req, res) => {
    console.log( req.params.id)
    
    dataorders.orders.push(    {
        id: 2,
        userid: req.params.id,
        date: new Date(),
    });


    res.send({
        success: true,
        confirmationNumber: Math.random(),
    }).end();
})

module.exports = router;
