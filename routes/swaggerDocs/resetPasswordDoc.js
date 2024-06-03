// docs/swaggerDocs/resetPasswordDoc.js
function resetPasswordDoc() {
  return {
    post: {
      summary: 'Reset password',
      description: 'Allows users to reset their password using a valid token.',
      tags: ['Authentication'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['password', 'passwordConfirm', 'token'],
              properties: {
                token: {
                  type: 'string',
                  description: 'Password reset token received via email'
                },
                password: {
                  type: 'string',
                  format: 'password',
                  description: 'New password',
                },
                passwordConfirm: {
                  type: 'string',
                  format: 'password',
                  description: 'Confirmation of the new password',
                },
              },
              example: {
                token: 'exampleToken123',
                password: 'newSecurePassword123',
                passwordConfirm: 'newSecurePassword123',
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Password reset successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 'success',
                  },
                  token: {
                    type: 'string',
                    description: 'Newly issued JWT for the user',
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Token invalid or expired',
        },
        500: {
          description: 'Error during the process',
        },
      },
    },
  };
}

export { resetPasswordDoc };
