const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');

const { PORT = 3000 } = process.env; // Слушаем 3000 порт
const app = express();

app.use(express.json()); // для собирания JSON-формата

// временное решение регистрации, позже уберём
app.use((req, res, next) => {
  req.user = {
    _id: '625b021e6f75c882a4ed613f',
  };
  next();
});

app.use(router);

mongoose.connect('mongodb://localhost:27017/mestodb');

app.listen(PORT);
