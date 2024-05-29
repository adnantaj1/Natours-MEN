// docs/swaggerDocs/updateReviewByIdDoc.js
function updateReviewByIdDoc() {
  return {
    patch: {
      summary: 'Update a review by ID',
      description:
        'Allows a user to update a review by its ID. User must be authenticated.',
      tags: ['Review Management'],
      security: [
        { bearerAuth: [] }, // Specifies that the user needs to be authenticated
      ],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'ID of the review to update',
          schema: {
            type: 'string',
            example: '660a3f679a656f4ff4c434a7',
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
                  example: 'This tour was even better than last time!',
                  minLength: 10,
                  maxLength: 1000,
                },
                rating: {
                  type: 'number',
                  description: 'Rating of the tour',
                  minimum: 1,
                  maximum: 5,
                  example: 5,
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Review updated successfully',
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
          description: 'Unauthorized, requires user to be logged in',
        },
        403: {
          description:
            'Forbidden, user does not have the necessary permissions',
        },
        404: {
          description: 'Review not found',
        },
      },
    },
  };
}

module.exports = { updateReviewByIdDoc };
