const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Liberar acesso para todos frontends
app.use(cors());

// Aqui é para dizer que o body vai vir em JSON
app.use(express.json());
app.use(routes);

app.listen(3333);
