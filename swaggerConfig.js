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
const { updateUserByIdDoc } = require('./routes/swaggerDocs/updateUserByIdDoc');

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
        get: getAllUsersDoc().get, // GET /users - List all users
        post: createUserDoc().post, // POST /users - Create a new user
      },
      '/users/{id}': {
        get: getUserByIdDoc().get, // GET /users/{id} - Get user by ID
        delete: deleteUserByIdDoc().delete, // DELETE /users/{id} - Delete user by ID
        patch: updateUserByIdDoc().patch,
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          // This is an arbitrary name for the security scheme
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js', './models/*.js'], // Path to the files Swagger should read
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
