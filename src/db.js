const mysql = require('mysql2');
require('dotenv').config();

const connectWithRetry = () => {
    const connection = mysql.createConnection({
        host: process.env.ORDER_DB_HOST || 'mariadb-order',
        user: process.env.ORDER_DB_USER,
        password: process.env.ORDER_DB_PASSWORD,
        database: process.env.ORDER_DB_NAME || 'orderdb',
        port: 3306,
    });

    connection.connect((err) => {
        if(err){
            console.error('❌ Error de conexión a la DB:',err.message);
            setTimeout(connectWithRetry,5000);
        }else{
            console.log('✅ Conectado a MariaDB - Base de datos order_db');
        }
    });

    return connection;
};

const connection=connectWithRetry();
module.exports=connection;