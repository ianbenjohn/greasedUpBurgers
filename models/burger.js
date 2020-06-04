const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res){
            cb(res);
        });
    },
    insertOne: function(burgerNew, cb) {
        orm.insertOne(burgerNew, function(res) {
            cb(res);
        })
    },
    updateOne: function(id, devoured, cb) {
        orm.updateOne(id, devoured, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;