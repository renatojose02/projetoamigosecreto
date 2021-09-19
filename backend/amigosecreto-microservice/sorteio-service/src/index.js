const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/routes');

const app = express();

app.use(express.json());

app.use(routes);

mongoose.connect('mongodb+srv://renato:r123@cluster0.8ia3p.mongodb.net/EAD?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3335);