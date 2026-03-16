const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send ('El bobo se estresa mientras el sabio se parcha');
});  

app.get('/json', (req, res) => {
    res.json({mensaje: 'Oe manito hablalo'});
});

app.get('/info', (req, res) => {
    res.json({mensaje: 'Nombre:Juan Pablo', Apellido: 'Largo Rivera'});
});

app.listen (3000, () =>{
    console.log('Servidor escuchando en el puerto 3000');
});