const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

//mongoose.connect('mongodb+srv://renato:r123@cluster0.8ia3p.mongodb.net/EAD?retryWrites=true&w=majority')

mongoose.connect('mongodb+srv://renato:r123@cluster0.8ia3p.mongodb.net/EAD?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3338, () => console.log(`API online na porta ${3338}!`));
