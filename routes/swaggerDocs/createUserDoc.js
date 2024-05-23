// docs/swaggerDocs/createUserDoc.js
function createUserDoc() {
  return {
    post: {
      summary: 'Create a new user',
      description:
        'Creates a new user in the system. Requires admin privileges.',
      tags: ['User Management'],
      security: [
        { bearerAuth: [] }, // Assumes you have bearerAuth defined in your Swagger config
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['name', 'email', 'password', 'passwordConfirm'],
              properties: {
                name: {
                  type: 'string',
                  description: 'Full name of the user',
                },
                email: {
                  type: 'string',
                  format: 'email',
                  description: 'Email address of the user',
                },
                password: {
                  type: 'string',
                  format: 'password',
                  description: 'Password for the user',
                },
                passwordConfirm: {
                  type: 'string',
                  format: 'password',
                  description:
                    'Confirmation of the password, must match the password field',
                },
                role: {
                  type: 'string',
                  description: 'Role of the user within the system',
                  enum: ['user', 'admin', 'moderator'],
                },
              },
              example: {
                name: 'Jane Doe',
                email: 'janedoe@example.com',
                password: 'Password123',
                passwordConfirm: 'Password123',
                role: 'user',
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: 'User created successfully',
          content: {
            'application/json': {
              schema: {},
            },
          },
        },
        400: {
          description: 'Bad request - validation error',
        },
        401: {
          description: 'Unauthorized - not logged in or session expired',
        },
        403: {
          description:
            'Forbidden - user does not have the necessary permissions',
        },
      },
    },
  };
}

module.exports = { createUserDoc };
