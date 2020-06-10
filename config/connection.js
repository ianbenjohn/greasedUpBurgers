const mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createConnection({
        host: 'sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: '	f7fag81huindadky',
        password: 'h1cdzw0mpjlaamis',
        database: 'yibs78d2vgmvctj9'
    });
};

//Connection
connection.connect(function(err) {
    if (err) {
        console.error('error connecting ' + err.stack);
        return;
    }
    console.log('connected as This ' + connection.threadId);
});

module.exports = connection;