const express = require('express');
const router = express.Router();

const burger = require('./models/burgers.js');

router.get('/', (req, res) => {
    burger.selectAll( data => {
        console.log(data);
        res.json(data);
    });
});

router.post('/', (req, res) => {
    burger.insertOne(['',''], [','], result => {
        console.log(result);
        res.json({ id: result.insertId });
    });
});

router.put('/', (req, res) => {
    burger.updateOne( {devoured: true }, condition, result => {
        console.log(reult);
        res.json(result);
    });
});

module.exports = router;