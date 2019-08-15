const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

// Conectando no banco de dados
mongoose.connect('mongodb+srv://iann:iann@tindev-ybk5d.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

// O use é usado para implementar um "módulo" dentro da sua variável
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);