// docs/swaggerDocs/getAllToursDoc.js
function getAllToursDoc() {
  return {
    get: {
      summary: 'Retrieve all tours',
      description: 'Fetches a list of all available tours.',
      tags: ['Tour Management'],
      responses: {
        200: {
          description: 'List of all tours retrieved successfully',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {},
              },
            },
          },
        },
        404: {
          description: 'No tours found',
        },
      },
    },
  };
}

module.exports = { getAllToursDoc };
