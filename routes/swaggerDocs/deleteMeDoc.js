// docs/swaggerDocs/deleteMeDoc.js
function deleteMeDoc() {
  return {
    delete: {
      summary: "Deactivate current user's account",
      description:
        "Marks the current user's account as inactive. Does not delete the account. Requires authentication.",
      tags: ['User Operations'],
      security: [{ bearerAuth: [] }],
      responses: {
        204: {
          description: 'User account deactivated successfully',
        },
        401: {
          description: 'Unauthorized',
        },
      },
    },
  };
}

module.exports = { deleteMeDoc };
