const express = require('express');
const router = express.Router();
const datasections = require('../data/sections').sections;

router.get('/', (req, res) => {
    const section = datasections.sections;

    if (!section) {
        return res.status(404).send({
            success: false,
        });
    }

    res.send({
        success: true,
        section,
    }).end()
})

router.get('/:id', (req, res) => {
    const section = datasections.sections.find((element) => element.id === req.params.id);

    if (!section) {
        return res.status(404).send({
            success: false,
        });
    }

    res.send({
        success: true,
        section,
    }).end()
})

module.exports = router;