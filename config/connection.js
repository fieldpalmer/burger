//set up mysql
const mysql = requite("mysql");
// set up connection object
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'burgers_db'
});
//make the connection
connecttion.connnect( err => {
    if (err) {
        console.err('err connection : ' + err.stack);
        return;
    }
    console.log('connected as id : ' + connection.threadId);
});
//export connection for ORM
module.exports = connection; 