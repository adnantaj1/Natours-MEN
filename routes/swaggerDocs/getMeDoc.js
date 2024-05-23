// docs/swaggerDocs/getMeDoc.js
function getMeDoc() {
  return {
    get: {
      summary: "Get current user's details",
      description:
        'Retrieves the details of the currently logged-in user. Requires authentication.',
      tags: ['User Operations'],
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: 'User details retrieved successfully',
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
        401: {
          description: 'Unauthorized',
        },
      },
    },
  };
}

module.exports = { getMeDoc };
