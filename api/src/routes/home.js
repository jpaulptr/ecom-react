const express = require('express');
const router = express.Router();

router.get('/bootstrap', (req, res)=>{
    res.send({
        success:true,
    }).end();
})
