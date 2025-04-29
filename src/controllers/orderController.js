const orderModel = require('../models/orderModel');

//crea nueva orden
const createOrder = (req,res) => {
    const {user_id, total, status} = req.body;

    //validación básica
    if (!user_id || !total || !status) {
        return res.status(400).json({error: 'Campos requeridos: user_id, total, status'});
    }

    //crea orden
    orderModel.createOrder(user_id, total, status, (err, result) => {
        if(err) return res.status(500).json({error: 'Error al crear la orden'});
        res.status(201).json({message: 'Orden creada exitosamente', orderId: result.insertId});
    });
};

//obtener todas las órdenes
const getAllOrders = (req, res) => {
    orderModel.getAllOrders((err, results) => {
        if (err) return res.status(500).json({error: 'Error al obtener órdenes'});
        res.status(200).json({orders: results});
    });
};

//obtener orden por id
const getOrderById = (req, res) => {
    const { id } = req.params;

    //validar id
    if(!id){
        return res.status(400).json({error: 'ID de la orden requerida'});
    }

    orderModel.getOrderById(id, (err, result) => {
        if(err) return res.status(500).json({error: 'Error al obtener la orden'});
        if(result.length === 0) return res.status(400).json({error: 'Orden no encontrada'});
        res.status(200).json({order: result[0]});
    });
};

//actualizar orden
const updateOrder = (req, res) => {
    const { id } = req.params;
    const {user_id, total, status} = req.body;

    //validación básica
    if(!user_id || !total || !status){
        return res.status(400).json({error: 'Campos requeridos: user_id, total, status'});
    }

    orderModel.updateOrder(id, user_id, total, status, (err, result) => {
        if(err) return res.status(500).json({error: 'Error al actualizar la orden'});
        if(result.affectedRows === 0) return res.status(400).json({error: 'Orden no encontrada'});

        res.status(200).json({message: 'Orden actualizada exitosamente'});
    });
};

//eliminar orden
const deleteOrder = (req, res) => {
    const { id } = req.params;

    //validar id
    if(!id){
        return res.status(400).json({error: 'ID de la orden es requerido'});
    }

    orderModel.deleteOrder (id, (err, result) => {
        if (err) return res.status(500).json({error: 'Error al eliminar la orden'});
        if (result.affectedRows === 0) return res.status(400).json({error: 'Orden no encontrada'});
        res.status(200).json({message: 'Orden eliminada exitosamente'});
    });
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById, 
    updateOrder,
    deleteOrder
};