const express = require('express');
const path = require('path');

const urlRoute = require('./routes/url');

const staticRoute = require('./routes/staticRouter');

const connectToMongoDB = require('./connect');

const app = express();
const PORT = 8000;

// Connections
connectToMongoDB('mongodb+srv://vaibhav:vaibhav@cluster0.fve49b6.mongodb.net/')
.then(() => console.log('Connected to MongoDB'));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route definitions
app.use('/url', urlRoute);

app.use('/', staticRoute);


app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
