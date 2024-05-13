const express = require('express');
const path = require('path');
require('dotenv').config();

// User model is utilized by passport
const User = require('./models/user');

// Require routers
const indexRouter = require('./routes/index');
const postRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

const app = express();

// Passportjs is for authentication
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {};

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const RateLimit = require('express-rate-limit');
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.use(helmet());
app.use(limiter);

// create mongoose connection to database
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = process.env.MONGODB_URL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.use('/', indexRouter);
app.use('/posts', postRouter);
app.use('/users', usersRouter);

const createError = require('http-errors');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
