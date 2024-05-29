// docs/swaggerDocs/deleteReviewByIdDoc.js
function deleteReviewByIdDoc() {
  return {
    delete: {
      summary: 'Delete a review by ID',
      description:
        'Allows a user to delete a review by its ID. User must be authenticated and have appropriate permissions.',
      tags: ['Review Management'],
      security: [
        { bearerAuth: [] }, // Specifies that the user needs to be authenticated
      ],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'ID of the review to delete',
          schema: {
            type: 'string',
            example: '660a3f679a656f4ff4c434a7',
          },
        },
      ],
      responses: {
        204: {
          description: 'Review deleted successfully, no content to return',
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

module.exports = { deleteReviewByIdDoc };
