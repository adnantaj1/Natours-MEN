// docs/swaggerDocs/getAllReviewsForTourDoc.js
function getAllReviewsForTourDoc() {
  return {
    get: {
      summary: 'Retrieve all reviews for a specific tour',
      description: 'Fetches a list of all reviews for a specific tour by tour ID.',
      tags: ['Review Management'],
      security: [
        { bearerAuth: [] }  // Specifies that the user needs to be authenticated
      ],
      parameters: [
        {
          name: 'tourId',
          in: 'path',
          required: true,
          description: 'ID of the tour to fetch reviews for',
          schema: {
            type: 'string',
            example: '5d725a1b7b292f5f8ceff788'
          }
        }
      ],
      responses: {
        200: {
          description: 'List of reviews for the specified tour retrieved successfully',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Review'
                }
              }
            }
          }
        },
        401: {
          description: 'Unauthorized, requires user to be logged in'
        },
        404: {
          description: 'No reviews found for the specified tour'
        },
      },
    },
  };
}

export { getAllReviewsForTourDoc };
