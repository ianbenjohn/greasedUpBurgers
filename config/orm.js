const connection = require('../config/connection.js');

const orm = {
    selectAll: function(cb){
        const query = 'SELECT * FROM burgers';
        connection.query(query, (err,res) => {
            if (err) throw err;
            cb(res);
        })
    },
    insertOne: function(burgerNew, cb) {
        const query = `insert into burgers(burger_name, devoured) values ('${burgerNew}, false)`;
        connection.query(query, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    updateOne: function(id, devoured, cb) {
        const query = `update burgers set devoured = ${devoured} where id = ${id}`;
        connection.query(query, function (err, res) {
            if (err) throw err;
            cb (res);
        })
    }
};

module.exports = orm;