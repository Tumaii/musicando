const express = require('express');
const routerCancion= require('./controllers/cancionController');
const app = express();
app.use(express.json());

app.use(routerCancion);
app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
});
app.listen(3000, () => {
    console.log('servidor corriendo')
});