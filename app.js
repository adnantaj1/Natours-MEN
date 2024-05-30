const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerConfig');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();

console.log(JSON.stringify(swaggerDocument, null, 2));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//1) Global Middlewares

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Set Security Http headers
app.use(helmet());
app.use(cors());
app.use(cookieParser());

// Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // log every request to the console
}

// Limit requests from an IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // 1 hour window
  message: 'Too many requests from this IP, please try again in an hour',
});
app.use('/api', limiter);

// Body Parser Middleware, Reading Data from Body into req.body
app.use(express.json({ limit: '10kb' }));
// app.use(express.static(`${__dirname}/public`));  // to access static files from the public folder

// Sanitize Data against no-SQL Injection
app.use(mongoSanitize());

// Sanitize Data against XSS
app.use(xss());

// Prevent HTTP Parameter Pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'price',
      'difficulty',
    ],
  }),
);
// test middleware
app.use((req, res, next) => {
  req.reqTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});

// Routes
app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

//global error handling middleware
// Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
