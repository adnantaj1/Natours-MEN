// docs/swaggerDocs/getMonthlyPlanDoc.js
function getMonthlyPlanDoc() {
  return {
    get: {
      summary: 'Retrieve a monthly plan for tours',
      description:
        'Fetches a monthly breakdown of the number of tours starting in each month for a given year.',
      tags: ['Tour Management'],
      security: [
        { bearerAuth: [] }, // This operation may require authentication
      ],
      parameters: [
        {
          name: 'year',
          in: 'path',
          required: true,
          description: 'Year for which the monthly plan is desired',
          schema: {
            type: 'integer',
            example: 2021,
          },
        },
      ],
      responses: {
        200: {
          description: 'Monthly tour plan retrieved successfully',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    month: { type: 'string', example: 'January' },
                    numTours: { type: 'number', example: 10 },
                    tours: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/Tour' },
                    },
                  },
                },
              },
            },
          },
        },
        404: {
          description: 'No tours found for the given year',
        },
      },
    },
  };
}

export { getMonthlyPlanDoc };
