const mysql = require('mysql2/promise');

async function connect() {
    const connection = await mysql.createConnection({
        host: process.env.HOSTNAME,
        user: 'root',
        password: '',
        database: 'Web'
    });
    console.log('Connected to MySQL');
    return connection;
}

export default connect;
