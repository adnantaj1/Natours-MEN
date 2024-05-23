// docs/swaggerDocs/updateMeDoc.js
function updateMeDoc() {
  return {
    patch: {
      summary: "Update current user's information",
      description:
        "Updates user's data except for password. Use /updateMyPassword for password changes. Requires authentication.",
      tags: ['User Operations'],
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: { type: 'string', description: "User's new name" },
                email: {
                  type: 'string',
                  format: 'email',
                  description: "User's new email address",
                },
              },
            },
            examples: {
              changeName: {
                summary: 'Change Name',
                value: { name: 'New Name' },
              },
              changeEmail: {
                summary: 'Change Email',
                value: { email: 'newemail@example.com' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'User updated successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: { type: 'string', example: 'success' },
                  data: {
                    type: 'object',
                    properties: {},
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Bad request',
        },
        401: {
          description: 'Unauthorized',
        },
      },
    },
  };
}

module.exports = { updateMeDoc };
