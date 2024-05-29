// docs/swaggerDocs/createReviewForTourDoc.js
function createReviewForTourDoc() {
  return {
    post: {
      summary: 'Create a review for a specific tour',
      description:
        'Allows a user to create a review for a specific tour. User must be authenticated and Admin can not create a review',
      tags: ['Review Management'],
      security: [
        { bearerAuth: [] }, // Specifies that the user needs to be authenticated
      ],
      parameters: [
        {
          name: 'tourId',
          in: 'path',
          required: true,
          description: 'ID of the tour to review',
          schema: {
            type: 'string',
            example: '660a18b3f80780f6fadd639f',
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
                review: {
                  type: 'string',
                  description: 'The text of the review',
                  example: 'This was an amazing tour!',
                  minLength: 10,
                  maxLength: 1000,
                },
                rating: {
                  type: 'number',
                  description: 'Rating of the tour',
                  minimum: 1,
                  maximum: 5,
                  example: 4.5,
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Review created successfully',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Review',
              },
            },
          },
        },
        400: {
          description: 'Invalid input, object invalid',
        },
        401: {
          description: 'Unauthorized, requires user to be logged in'
        },
        403: {
          description:
            'Forbidden, user does not have the necessary permissions',
        },
      },
    },
  };
}

module.exports = { createReviewForTourDoc };
