// docs/swaggerDocs/forgotPasswordDoc.js
function forgotPasswordDoc() {
  return {
    post: {
      summary: 'Request password reset',
      description: "Sends a password reset link to the user's email.",
      tags: ['Authentication'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['email'],
              properties: {
                email: {
                  type: 'string',
                  format: 'email',
                  description: 'Email address associated with your account'
                },
              },
              example: {
                email: 'user@example.com',
              },
            },
          },
        },
      },
      responses: {
        200: {
          description:
            'Email sent successfully with password reset instructions',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 'success',
                  },
                  message: {
                    type: 'string',
                    example:
                      'An email has been sent to your email address with further instructions.',
                  },
                },
              },
            },
          },
        },
        404: {
          description: 'No user found with this email address',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 'error',
                  },
                  message: {
                    type: 'string',
                    example: 'There is no User with this email address'
                  },
                },
              },
            },
          },
        },
        500: {
          description: 'Email could not be sent due to server error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 'error',
                  },
                  message: {
                    type: 'string',
                    example:
                      'There was an error sending the email, Try again later!',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
}

export { forgotPasswordDoc };
