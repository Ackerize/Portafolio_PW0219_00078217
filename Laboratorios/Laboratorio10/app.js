var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoDB = require('./config/mongo')

var indexRouter = require('./routes/index');
var registroRouter = require('./routes/registro');


var app = express();

mongoDB.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/demo', indexRouter);
app.use('/registro', registroRouter);

module.exports = app;
