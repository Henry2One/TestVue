const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors());

app.use(express.json());

let products = [];

app.get('/api/products', (req, res) => {
    res.json({
        data: products
    });
});

app.post('/api/products', (req, res) => {
    const { name, price, category } = req.body;

    if (!name || !price || !category || price === 0) {
        return res.status(400).json({
            message: "Faltan datos requeridos: 'name', 'price' y 'category'",
            status: "error"
        });
    }

    const nuevoProducto = {
        id: products.length + 1, 
        name,
        price,
        category
    };

    products.push(nuevoProducto);

    res.status(201).json({
        message: "Producto agregado exitosamente",
        status: "success",
        data: products
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
