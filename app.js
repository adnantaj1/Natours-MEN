const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//1) Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // log every request to the console
}
app.use(express.json());
// app.use(express.static(`${__dirname}/public`));  // to access static files from the public folder
app.use((req, res, next) => {
  req.reqTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

// Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

//global error handling middleware
// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
