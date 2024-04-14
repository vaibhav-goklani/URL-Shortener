const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const { restrictToLoggedinUserOnly, checkAuth } = require('./middlewares/auth');

const urlRoute = require('./routes/url');
const userRoute = require('./routes/user');
const staticRoute = require('./routes/staticRouter');

const connectToMongoDB = require('./connect');

const app = express();
const PORT = process.env.PORT || 8001;

// Connections
connectToMongoDB(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Route definitions
app.use('/url', restrictToLoggedinUserOnly, urlRoute);
app.use('/user', userRoute);
app.use('/', checkAuth, staticRoute);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}. Click Here: http://127.0.0.1:${PORT}`));
