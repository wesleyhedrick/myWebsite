require('dotenv');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const routes = './routes/'
const homeRouter = require(routes +'home');
const usersRouter = require(routes +'users');
const aboutMeRouter = require(routes +'aboutMe');
const portfolioRouter = require(routes +'portfolio');
const nuggetsRouter = require(routes +'nuggets');
const codeExegeteRouter = require(routes +'codeExegete');

const {portfolio} = require('./models')

portfolio.create({
    title:'Blackjack',
    description:'A working blackjack game',
    image:'https://www.google.com',
    link:'https://www.google.com'
})

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
console.log('pathname', path.join(__dirname, 'public'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/aboutme', aboutMeRouter);
app.use('/portfolio', portfolioRouter);
app.use('/nuggets', nuggetsRouter);
app.use('/codeexegete', codeExegeteRouter);

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
