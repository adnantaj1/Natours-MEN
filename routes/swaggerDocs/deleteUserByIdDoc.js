// docs/swaggerDocs/deleteUserByIdDoc.js
function deleteUserByIdDoc() {
  return {
    delete: {
      summary: 'Delete a user by ID',
      description: 'Deletes a specific user by ID. Requires admin privileges.',
      tags: ['User Management'],
      security: [
        { bearerAuth: [] }, // Ensures only authenticated users with bearer token can access
      ],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'The ID of the user to delete',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        204: {
          description: 'User deleted successfully, no content returned',
        },
        401: {
          description: 'Unauthorized, token missing or invalid',
        },
        403: {
          description:
            'Forbidden, user does not have the necessary admin privileges',
        },
        404: {
          description: 'User not found',
        },
      },
    },
  };
}

module.exports = { deleteUserByIdDoc };
