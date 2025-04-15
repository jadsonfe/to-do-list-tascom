const express = require('express');
const cors = require('cors'); // 👈 importe o CORS
const routes = require('./routes');

const app = express();

app.use(cors()); // 👈 habilita o CORS
app.use(express.json());

app.use(routes);

module.exports = app;
