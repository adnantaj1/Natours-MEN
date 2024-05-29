// docs/swaggerDocs/deleteTourByIdDoc.js
function deleteTourByIdDoc() {
  return {
    delete: {
      summary: 'Delete a tour by ID',
      description:
        'Deletes a specific tour by its ID. Requires admin privileges.',
      tags: ['Tour Management'],
      security: [
        { bearerAuth: [] }, // Ensures operation requires authentication
      ],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'Unique identifier of the tour to delete',
          schema: {
            type: 'string',
            example: '123abc',
          },
        },
      ],
      responses: {
        204: {
          description: 'Tour deleted successfully, no content to return',
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

module.exports = { deleteTourByIdDoc };
