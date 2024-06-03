// docs/swaggerDocs/updateTourByIdDoc.js
function updateTourByIdDoc() {
  return {
    patch: {
      summary: 'Update a tour by ID',
      description:
        'Updates specific fields of a tour. Only fields provided in the request body will be updated.',
      tags: ['Tour Management'],
      security: [
        { bearerAuth: [] }, // Ensures operation requires authentication, typically admin privileges
      ],
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
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Name of the tour',
                  example: 'The Forest Hiker Updated',
                },
                duration: {
                  type: 'number',
                  description: 'Duration of the tour in days',
                  example: 7,
                },
                maxGroupSize: {
                  type: 'number',
                  description: 'Maximum group size allowed for the tour',
                  example: 15,
                },
                difficulty: {
                  type: 'string',
                  description: 'Difficulty level of the tour',
                  enum: ['easy', 'medium', 'difficult'],
                  example: 'easy',
                },
                price: {
                  type: 'number',
                  description: 'Price of the tour',
                  example: 1099.99,
                },
                summary: {
                  type: 'string',
                  description: 'Brief summary of the tour',
                  example: 'An updated thrilling adventure in the forest',
                },
                // Add other fields that are allowed to be updated
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Tour updated successfully',
          content: {
            'application/json': {
              schema: {},
            },
          },
        },
        400: {
          description: 'Validation error or bad request',
        },
        401: {
          description: 'Unauthorized, token missing or invalid',
        },
        403: {
          description:
            'Forbidden, user does not have the necessary permissions',
        },
        404: {
          description: 'Tour not found',
        },
      },
    },
  };
}

export { updateTourByIdDoc };
