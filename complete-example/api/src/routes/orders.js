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

module.exports = router;
