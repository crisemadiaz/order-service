const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

//crear orden
router.post('/orders', orderController.createOrder);

//obtener todas las órdenes
router.get('/orders', orderController.getAllOrders);

//obtener orden por ID
router.get('/orders/:id', orderController.getOrderById);

//actualizar orden por ID
router.put('/orders/:id', orderController.updateOrder);

//eliminar orden por ID
router.delete('/orders/:id', orderController.deleteOrder);

//ruta de prueba
router.get('/ping', (req, res) => {
    res.json({message: 'pong desde Order Service'});
});

module.exports = router;