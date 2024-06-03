// docs/swaggerDocs/createTourDoc.js
function createTourDoc() {
  return {
    post: {
      summary: 'Create a new tour',
      description: 'Adds a new tour to the catalog. Requires admin privileges.',
      tags: ['Tour Management'],
      security: [
        { bearerAuth: [] }, // Requires a valid bearer token
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: [
                'name',
                'duration',
                'maxGroupSize',
                'difficulty',
                'price',
                'summary',
                'imageCover',
              ],
              properties: {
                name: {
                  type: 'string',
                  description: 'Name of the tour',
                  example: 'The Forest Hiker',
                },
                duration: {
                  type: 'number',
                  description: 'Duration of the tour in days',
                  example: 5,
                },
                maxGroupSize: {
                  type: 'number',
                  description: 'Maximum group size allowed for the tour',
                  example: 10,
                },
                difficulty: {
                  type: 'string',
                  description: 'Difficulty level of the tour',
                  enum: ['easy', 'medium', 'difficult'],
                  example: 'medium',
                },
                ratingsAverage: {
                  type: 'number',
                  default: 4.5,
                  description: 'Average rating of the tour',
                  example: 4.7,
                },
                price: {
                  type: 'number',
                  description: 'Price of the tour',
                  example: 999.99,
                },
                summary: {
                  type: 'string',
                  description: 'Brief summary of the tour',
                  example: 'Enjoy a beautiful day in the forest',
                },
                imageCover: {
                  type: 'string',
                  description: 'URL of the tour cover image',
                  example: 'http://example.com/image.jpg',
                },
                // Add other fields as necessary, such as 'description', 'images', etc.
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Tour created successfully',
          content: {
            'application/json': {
              schema: {},
            },
          },
        },
        400: {
          description: 'Validation error',
        },
        401: {
          description: 'Unauthorized, token missing or invalid',
        },
        403: {
          description:
            'Forbidden, user does not have the necessary permissions',
        },
      },
    },
  };
}

export { createTourDoc };
