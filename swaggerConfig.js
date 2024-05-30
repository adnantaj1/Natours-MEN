const swaggerJsdoc = require('swagger-jsdoc');
const { signupDoc } = require('./routes/swaggerDocs/signupDoc');
const { loginDoc } = require('./routes/swaggerDocs/loginDoc');
const { forgotPasswordDoc } = require('./routes/swaggerDocs/forgotPasswordDoc');
const { resetPasswordDoc } = require('./routes/swaggerDocs/resetPasswordDoc');
const { updatePasswordDoc } = require('./routes/swaggerDocs/updatePasswordDoc');
const { getMeDoc } = require('./routes/swaggerDocs/getMeDoc');
const { updateMeDoc } = require('./routes/swaggerDocs/updateMeDoc');
const { deleteMeDoc } = require('./routes/swaggerDocs/deleteMeDoc');
const { getAllUsersDoc } = require('./routes/swaggerDocs/getAllUsersDoc');
const { getUserByIdDoc } = require('./routes/swaggerDocs/getUserByIdDoc');
const { deleteUserByIdDoc } = require('./routes/swaggerDocs/deleteUserByIdDoc');
const { createUserDoc } = require('./routes/swaggerDocs/createUserDoc');
const { updateUserByIdDoc } = require('./routes/swaggerDocs/UpdateUserByIdDoc');
const { getAllToursDoc } = require('./routes/swaggerDocs/getAllToursDoc');
const { createTourDoc } = require('./routes/swaggerDocs/createTourDoc');
const { getTourByIdDoc } = require('./routes/swaggerDocs/getTourByIdDoc');
const { deleteTourByIdDoc } = require('./routes/swaggerDocs/deleteTourByIdDoc');
const { updateTourByIdDoc } = require('./routes/swaggerDocs/updateTourByIdDoc');
const { top5ToursDoc } = require('./routes/swaggerDocs/top5ToursDoc');
const { tourStatsDoc } = require('./routes/swaggerDocs/tourStatsDoc');
const { getMonthlyPlanDoc } = require('./routes/swaggerDocs/getMonthlyPlanDoc');
const { getAllReviewsDoc } = require('./routes/swaggerDocs/getAllReviewsDoc');
const { getAllReviewsForTourDoc } = require('./routes/swaggerDocs/getAllReviewsForTourDoc');
const { createReviewForTourDoc } = require('./routes/swaggerDocs/createReviewForTourDoc');
const { updateReviewByIdDoc } = require('./routes/swaggerDocs/updateReviewByIdDoc');
const { deleteReviewByIdDoc } = require('./routes/swaggerDocs/deleteReviewByIdDoc');

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
        get: getTourByIdDoc().get, // Add the GET operation defined in getTourByIdDoc.js
        delete: deleteTourByIdDoc().delete, // DELETE Tour by ID
        patch: updateTourByIdDoc().patch, // PATCH Tour by ID
      },
      '/tours/top-5-tours': top5ToursDoc(),
      '/tours/tour-stats': tourStatsDoc(),
      '/tours/monthly-plan/{year}': getMonthlyPlanDoc(),
      // Reviews
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
//this file is updated

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
