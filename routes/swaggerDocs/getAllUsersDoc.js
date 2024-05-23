// docs/swaggerDocs/getAllUsersDoc.js
function getAllUsersDoc() {
  return {
    get: {
      summary: 'Retrieve all users',
      description: 'Fetches a list of all users. Requires admin privileges.',
      tags: ['User Management'],
      security: [
        { bearerAuth: [] }, // Assumes you have bearerAuth defined in your Swagger config
      ],
      responses: {
        200: {
          description: 'List of users',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: {},
                  },
                },
              },
            },
          },
        },
        401: {
          description: 'Unauthorized, token missing or invalid',
        },
        403: {
          description:
            'Forbidden, user does not have the necessary admin privileges',
        },
      },
    },
  };
}

module.exports = { getAllUsersDoc };
