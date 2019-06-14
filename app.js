var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');//----- added
mongoose.connect('mongodb+srv://developer:QbXe7jqXrSzli7qz@cluster0-8hels.gcp.mongodb.net/autosdb',
{useNewUrlParser:true}).then(
()=>{
	console.log('Connected');
});
//QbXe7jqXrSzli7qz  cambiar passwor por la contrasenia
//cambiar test por nombre autosdb
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var galeriaRouter=require('./routes/galeria');//------ added

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/galeria',galeriaRouter);//------ added

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
