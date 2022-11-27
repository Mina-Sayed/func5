
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const todo = require('./routes/todo');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/todos', todo);


// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true})
    .then(() => {
        console.log(`CONNECTED TO MONGO!`);
    })
    .catch((err) => {
        console.log(`OH NO! MONGO CONNECTION ERROR!`);
        console.log(err);
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }   
);