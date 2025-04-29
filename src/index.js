const express = require('express');
const cors = require('cors');
require('dotenv').config();
const orderRoutes = require('./routes/orderRoutes');
require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/order', orderRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Order Service escuchando en el puerto ${PORT}`);
});