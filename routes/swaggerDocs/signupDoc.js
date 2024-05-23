// docs/swaggerDocs.js
function signupDoc() {
  return {
    post: {
      summary: 'Sign up a new user',
      description: 'Register a new user with their email and password.',
      tags: ['Signup'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['name', 'email', 'password', 'passwordConfirm'],
              properties: {
                name: { type: 'string', description: 'Full name of the user' },
                email: {
                  type: 'string',
                  format: 'email',
                  description: 'Email address of the user',
                },
                password: {
                  type: 'string',
                  format: 'password',
                  description: 'Password for the user',
                },
                passwordConfirm: {
                  type: 'string',
                  format: 'password',
                  description: 'A confirmation of the typed password',
                },
              },
            },
            examples: {
              user: {
                summary: 'Sample user',
                value: {
                  name: 'John Doe',
                  email: 'john@example.com',
                  password: 'Password123',
                  passwordConfirm: 'Password123'
                },
              },
            },
          },
        },
      },
      responses: {
        201: { description: 'User created successfully' },
        400: { description: 'Bad request' },
      },
    },
  };
}

module.exports = {
  signupDoc,
};
