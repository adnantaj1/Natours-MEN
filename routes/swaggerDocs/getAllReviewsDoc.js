// docs/swaggerDocs/getAllReviewsDoc.js
function getAllReviewsDoc() {
  return {
    get: {
      summary: 'Retrieve all reviews',
      description:
        'Fetches a list of all reviews from all tours for any logged-in user.',
      tags: ['Review Management'],
      security: [
        { bearerAuth: [] }, // Specifies that the user needs to be authenticated
      ],
      responses: {
        200: {
          description: 'List of all reviews retrieved successfully',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Review',
                },
              },
            },
          },
        },
        401: {
          description: 'Unauthorized, requires user to be logged in',
        },
        404: {
          description: 'No reviews found',
        },
      },
    },
  };
}

module.exports = { getAllReviewsDoc };
