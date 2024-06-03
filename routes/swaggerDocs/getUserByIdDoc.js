// docs/swaggerDocs/getUserByIdDoc.js
function getUserByIdDoc() {
  return {
    get: {
      summary: 'Get a user by ID',
      description:
        'Fetches a single user by ID. Requires authentication and may require admin privileges depending on implementation.',
      tags: ['User Management'],
      security: [
        { bearerAuth: [] }, // Requires a valid bearer token
      ],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'Unique identifier of the user',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'User details retrieved successfully',
          content: {
            'application/json': {
              schema: {},
            },
          },
        },
        401: {
          description: 'Unauthorized, token missing or invalid',
        },
        403: {
          description: "Forbidden, not allowed to access this user's data",
        },
        404: {
          description: 'User not found',
        },
      },
    },
  };
}

export { getUserByIdDoc };
