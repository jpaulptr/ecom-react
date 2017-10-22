const express = require('express');
const router = express.Router();
const dataitems = require('../data/items').items;

router.get('/:id', (req, res) => {
    console.log(req.params)
    const item = dataitems.items.find((element) => element.id === req.params.id);

    if (!item) {
        return res.status(404).send({
            success: false,
        });
    }

    res.send({
        success: true,
        item,
    }).end();
})

module.exports = router;
