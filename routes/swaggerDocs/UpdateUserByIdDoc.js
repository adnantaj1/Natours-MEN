// docs/swaggerDocs/updateUserByIdDoc.js
function updateUserByIdDoc() {
  return {
    patch: {
      summary: 'Update a user by ID',
      description:
        'Updates specified user details by ID. Requires admin privileges or self-update rights.',
      tags: ['User Management'],
      security: [
        { bearerAuth: [] }, // Requires a valid bearer token, assuming admin or self-update rights
      ],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'The ID of the user to update',
          schema: {
            type: 'string',
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
                name: { type: 'string', description: "User's new name" },
                email: {
                  type: 'string',
                  format: 'email',
                  description: "User's new email address",
                },
                role: { type: 'string', description: "User's new role" },
                // Add other fields that are allowed to be updated
              },
              example: {
                name: 'Jane Doe',
                email: 'janedoe@update.com',
                role: 'guide', // Assuming role updates are allowed
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'User updated successfully',
          content: {
            'application/json': {
              schema: {},
            },
          },
        },
        400: {
          description: 'Validation error for provided data',
        },
        401: {
          description: 'Unauthorized, token missing or invalid',
        },
        403: {
          description:
            'Forbidden, user does not have the necessary permissions',
        },
        404: {
          description: 'User not found',
        },
      },
    },
  };
}

module.exports = { updateUserByIdDoc };
