const express = require('express');
const router = express.Router();
const dataorders = require('../data/orders');
const dataitems = require('../data/items');

router.get('/user/:id', (req, res) => {
    console.log(req.params.id)
    console.log(dataorders.orders)
    const orders = dataorders.orders.filter((element) => element.userid === req.params.id);

    if (!orders) {
        return res.status(404).send({
            success: false,
        });
    }

    res.send({
        success: true,
        orders,
    }).end();
})

router.put('/:id', (req, res) => {
    const orderItems = [];
    req.body.cart.forEach((element) => {
        const item = dataitems.items.find(ele => element.id === ele.id);
        item.count = element.count;
        
        if(item){
            orderItems.push(item);
        }
    })
    console.log(orderItems)
    const orderId = parseInt(dataorders.orders[dataorders.orders.length-1].id) + 1;
    dataorders.orders.push({
        id: orderId.toString(),
        userid: req.params.id,
        date: new Date(),
        items: orderItems
    });

    res.send({
        success: true,
        confirmationNumber: Math.random(),
    }).end();
})

module.exports = router;
