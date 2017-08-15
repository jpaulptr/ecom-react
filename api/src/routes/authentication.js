const express = require('express');
const router = express.Router();
const users = require('../data/users').users;

router.put('/login', (req, res) => {
    const user = users.users.find((element) => element.username === req.body.username);
    
    if (!user || user.password !== req.body.password) {
        return res.status(404).send({
            success: false,
        });
    }
    const response = Object.assign({}, user);
    delete response.password;

    res.send({
        success: true,
        user: response,
    }).end();
})

module.exports = router;
