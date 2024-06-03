import swaggerJsdoc from 'swagger-jsdoc';

import { signupDoc } from './routes/swaggerDocs/signupDoc.js';
import { loginDoc } from './routes/swaggerDocs/loginDoc.js';
import { forgotPasswordDoc } from './routes/swaggerDocs/forgotPasswordDoc.js';
import { resetPasswordDoc } from './routes/swaggerDocs/resetPasswordDoc.js';
import { updatePasswordDoc } from './routes/swaggerDocs/updatePasswordDoc.js';
import { getMeDoc } from './routes/swaggerDocs/getMeDoc.js';
import { updateMeDoc } from './routes/swaggerDocs/updateMeDoc.js';
import { deleteMeDoc } from './routes/swaggerDocs/deleteMeDoc.js';
import { getAllUsersDoc } from './routes/swaggerDocs/getAllUsersDoc.js';
import { getUserByIdDoc } from './routes/swaggerDocs/getUserByIdDoc.js';
import { deleteUserByIdDoc } from './routes/swaggerDocs/deleteUserByIdDoc.js';
import { createUserDoc } from './routes/swaggerDocs/createUserDoc.js';
import { updateUserByIdDoc } from './routes/swaggerDocs/updateUserByIdDoc.js';
import { getAllToursDoc } from './routes/swaggerDocs/getAllToursDoc.js';
import { createTourDoc } from './routes/swaggerDocs/createTourDoc.js';
import { getTourByIdDoc } from './routes/swaggerDocs/getTourByIdDoc.js';
import { deleteTourByIdDoc } from './routes/swaggerDocs/deleteTourByIdDoc.js';
import { updateTourByIdDoc } from './routes/swaggerDocs/updateTourByIdDoc.js';
import { top5ToursDoc } from './routes/swaggerDocs/top5ToursDoc.js';
import { tourStatsDoc } from './routes/swaggerDocs/tourStatsDoc.js';
import { getMonthlyPlanDoc } from './routes/swaggerDocs/getMonthlyPlanDoc.js';
import { getAllReviewsDoc } from './routes/swaggerDocs/getAllReviewsDoc.js';
import { getAllReviewsForTourDoc } from './routes/swaggerDocs/getAllReviewsForTourDoc.js';
import { createReviewForTourDoc } from './routes/swaggerDocs/createReviewForTourDoc.js';
import { updateReviewByIdDoc } from './routes/swaggerDocs/updateReviewByIdDoc.js';
import { deleteReviewByIdDoc } from './routes/swaggerDocs/deleteReviewByIdDoc.js';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'A detailed description of the API.',
    },
    servers: [
      {
        url: 'https://natours-men-2.onrender.com/api/v1',
        description: 'Live server',
      },
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Development server',
      },
    ],
    paths: {
      '/users/signup': signupDoc(),
      '/users/login': loginDoc(),
      '/users/forgotPassword': forgotPasswordDoc(),
      '/users/resetPassword/{token}': resetPasswordDoc(),
      '/users/updatePassword': updatePasswordDoc(),
      '/users/me': getMeDoc(),
      '/users/updateMe': updateMeDoc(),
      '/users/deleteMe': deleteMeDoc(),
      '/users': {
        get: getAllUsersDoc().get,
        post: createUserDoc().post,
      },
      '/users/{id}': {
        get: getUserByIdDoc().get,
        delete: deleteUserByIdDoc().delete,
        patch: updateUserByIdDoc().patch,
      },
      '/tours': {
        get: getAllToursDoc().get,
        post: createTourDoc().post,
      },
      '/tours/{id}': {
        get: getTourByIdDoc().get,
        delete: deleteTourByIdDoc().delete,
        patch: updateTourByIdDoc().patch,
      },
      '/tours/top-5-tours': top5ToursDoc(),
      '/tours/tour-stats': tourStatsDoc(),
      '/tours/monthly-plan/{year}': getMonthlyPlanDoc(),
      '/reviews': getAllReviewsDoc(),
      '/tours/{tourId}/reviews': {
        get: getAllReviewsForTourDoc().get,
        post: createReviewForTourDoc().post,
      },
      '/reviews/{id}': {
        patch: updateReviewByIdDoc().patch,
        delete: deleteReviewByIdDoc().delete,
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'string', example: 'abc123' },
            name: { type: 'string', example: 'John Doe' },
            email: {
              type: 'string',
              format: 'email',
              example: 'johndoe@example.com',
            },
            role: { type: 'string', example: 'user' },
            photo: { type: 'string', example: 'http://example.com/photo.jpg' },
          },
        },
        Tour: {
          type: 'object',
          properties: {
            id: { type: 'string', example: 't123' },
            name: { type: 'string', example: 'The Forest Hiker' },
            duration: { type: 'number', example: 5 },
            maxGroupSize: { type: 'number', example: 10 },
            difficulty: { type: 'string', example: 'medium' },
            ratingsAverage: { type: 'number', format: 'float', example: 4.7 },
            price: { type: 'number', example: 299.99 },
            summary: {
              type: 'string',
              example: 'A thrilling adventure in the forest',
            },
            imageCover: {
              type: 'string',
              example: 'http://example.com/photos/tour-cover.jpg',
            },
          },
        },
        Review: {
          type: 'object',
          properties: {
            review: { type: 'string', example: 'This was an amazing tour!' },
            rating: { type: 'number', example: 5 },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2020-01-01T00:00:00.000Z',
            },
            tour: { type: 'string', example: 'tour123' },
            user: { type: 'string', example: 'user123' }
          },
        },
      },
    },
  },
  apis: ['./routes/*.js', './models/*.js'], // Path to the files Swagger should read
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
