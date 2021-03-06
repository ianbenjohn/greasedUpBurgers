const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(data => {
        const obj = {
            burgers: data
        };
        console.log(data);
        res.render('index', obj);
    });
});

router.post('/api/burger', (req, res) => {
    console.log(req.body)
    burger.insertOne(req.body.name, (data => {
        console.log(data)
        res.json(data.insertId);
    }));
});

router.put("/api/burger/:id", function(req, res) {
    burger.updateOne(req.params.id, true, function(data) {
        if(data.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;