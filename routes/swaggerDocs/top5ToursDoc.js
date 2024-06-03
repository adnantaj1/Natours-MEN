// docs/swaggerDocs/top5ToursDoc.js
function top5ToursDoc() {
  return {
    get: {
      summary: 'Retrieve top 5 highest-rated tours',
      description:
        'Fetches the top 5 tours sorted by ratings average and limited to the most popular ones.',
      tags: ['Tour Management'],
      responses: {
        200: {
          description: 'Top 5 tours retrieved successfully',
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

export { top5ToursDoc };
