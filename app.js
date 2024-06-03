import express from 'express';
import path from 'path';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swaggerConfig.js';
import AppError from './utils/appError.js';
import globalErrorHandler from './controllers/errorController.js';
import tourRouter from './routes/tourRoutes.js';
import userRouter from './routes/userRoutes.js';
import reviewRouter from './routes/reviewRoutes.js';
import viewRouter from './routes/viewRoutes.js';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set('view engine', 'pug');
app.set('views', path.join(path.resolve(), 'views'));

// 1) Global Middlewares

// Serving static files
app.use(express.static(path.join(path.resolve(), 'public')));

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

// Test middleware
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

// Global error handling middleware
app.use(globalErrorHandler);

export { app };
export default app;
