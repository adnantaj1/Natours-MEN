// docs/swaggerDocs.js
function loginDoc() {
  return {
    post: {
      summary: 'User login',
      description: 'Allows users to log in by providing an email and password.',
      tags: ['Authentication'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['email', 'password'],
              properties: {
                email: {
                  type: 'string',
                  format: 'email',
                  description: 'User email address',
                },
                password: {
                  type: 'string',
                  format: 'password',
                  description: 'User password',
                },
              },
              example: {
                email: 'user@example.com',
                password: 'yourpassword',
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Login successful',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  token: {
                    type: 'string',
                    description:
                      'JWT token for authenticating further requests',
                  },
                  user: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        description: 'User ID',
                      },
                      name: {
                        type: 'string',
                        description: 'User name',
                      },
                      email: {
                        type: 'string',
                        description: 'User email',
                      },
                    },
                  },
                },
                example: {
                  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                  user: {
                    id: '12345',
                    name: 'John Doe',
                    email: 'user@example.com'
                  },
                },
              },
            },
          },
        },
        401: {
          description: 'Authentication failed',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    description: 'A description of the authentication failure'
                  },
                },
                example: {
                  message: 'Invalid credentials'
                },
              },
            },
          },
        },
      },
    },
  };
}

module.exports = {
  loginDoc,
};
