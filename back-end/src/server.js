const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;
const routes = require('./Routes/Routes');
require('./Database');

app.use(bodyParser.json())
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log('Servidor iniciado com sucesso na porta: ' + port);
})