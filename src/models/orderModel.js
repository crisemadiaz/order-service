const db = require('../db');

//crear nueva orden en la base de datos
const createOrder = (user_id, total, status, callback) => {
    const sql = 'INSERT INTO orders (user_id, total, status) VALUES (?, ?, ?)';
    db.query(sql, [user_id, total, status], callback);
};

//obtener todas las órdenes
const getAllOrders = (callback) => {
    const sql = 'SELECT * FROM orders';
    db.query(sql, callback);
};

//obtener orden por ID
const getOrderById = (id, callback) => {
    const sql = 'SELECT * FROM orders WHERE id = ?';
    db.query(sql, [id], callback);
};

//actualiza una orden por id
const updateOrder = (id, user_id, total, status, callback) => {
    const sql = 'UPDATE orders SET user_id = ?, total=?, status=? WHERE id=?';
    db.query(sql, [user_id, total, status], callback);
};

//Eliminar una orden
const deleteOrder= (id, callback) => {
    const sql = 'DELETE FROM orders WHERE id=?';
    db.query(sql, [id], callback);
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};