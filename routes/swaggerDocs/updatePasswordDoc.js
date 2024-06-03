// docs/swaggerDocs/updatePasswordDoc.js
function updatePasswordDoc() {
  return {
    patch: {
      summary: 'Update password',
      description:
        'Allows authenticated users to update their current password.',
      tags: ['Authentication'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['passwordCurrent', 'password', 'passwordConfirm'],
              properties: {
                passwordCurrent: {
                  type: 'string',
                  format: 'password',
                  description: 'Current password',
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
                passwordCurrent: 'oldPassword123',
                password: 'newPassword123',
                passwordConfirm: 'newPassword123',
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Password updated successfully',
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
        401: {
          description: 'Current password is incorrect',
        },
        500: {
          description: 'Error during the update process',
        },
      },
    },
  };
}

export { updatePasswordDoc };
