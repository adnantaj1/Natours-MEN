// docs/swaggerDocs/getTourByIdDoc.js
function getTourByIdDoc() {
  return {
    get: {
      summary: 'Retrieve a tour by ID',
      description:
        'Fetches detailed information about a specific tour using its unique ID.',
      tags: ['Tour Management'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'Unique identifier of the tour',
          schema: {
            type: 'string',
            example: '123abc',
          },
        },
      ],
      responses: {
        200: {
          description: 'Tour details retrieved successfully',
          content: {
            'application/json': {
              schema: {},
            },
          },
        },
        404: {
          description: 'Tour not found',
        },
      },
    },
  };
}

export { getTourByIdDoc };
