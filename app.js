const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(compression());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const defineRoutes = require('./routes');

module.exports = defineRoutes(app);
