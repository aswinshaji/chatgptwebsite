const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const errorHandler = require('./middlewares/errorMiddleware.js');

const authRoutes = require('./routes/authRoutes.js');

dotenv.config({path: './config/.env'});

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(errorHandler);

const PORT = process.env.PORT;

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/openai', require('./routes/openaiRoutes.js'));

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.DEV_MODE} on ${PORT}`);
});

module.exports = app;