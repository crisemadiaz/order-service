const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

//ruta de prueba
router.get('/ping', (req, res) => {
    res.json({message: 'pong desde Order Service'});
});

//crear orden
router.post('/', orderController.createOrder);

//obtener todas las órdenes
router.get('/', orderController.getAllOrders);

//obtener orden por ID
router.get('/:id', orderController.getOrderById);

//actualizar orden por ID
router.put('/:id', orderController.updateOrder);

//eliminar orden por ID
router.delete('/:id', orderController.deleteOrder);

module.exports = router;