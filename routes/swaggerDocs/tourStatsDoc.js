// docs/swaggerDocs/tourStatsDoc.js
function tourStatsDoc() {
  return {
    get: {
      summary: 'Retrieve tour statistics',
      description:
        'Provides statistical data on tours, including counts, averages, max, min, etc.',
      tags: ['Tour Management'],
      security: [
        { bearerAuth: [] }, // Ensures operation requires authentication, often admin
      ],
      responses: {
        200: {
          description: 'Tour statistics retrieved successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  totalTours: { type: 'number', example: 50 },
                  avgRating: { type: 'number', format: 'float', example: 4.5 },
                  maxGroupSize: { type: 'number', example: 25 },
                  minPrice: { type: 'number', example: 100 },
                  maxPrice: { type: 'number', example: 1000 },
                  // Additional stats can be included as needed
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
            'Forbidden, user does not have the necessary permissions',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
  };
}

export { tourStatsDoc };
