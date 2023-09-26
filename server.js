const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const citiesData = require('./citiesData.json'); // Carregue seus dados de cidades JSON aqui

app.get('/cities', (req, res) => {
  res.json(citiesData);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
