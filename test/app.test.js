// test/app.test.js
import request from 'supertest';
import app from '../app';

describe('General Application Tests', () => {
  it('should handle not found errors', async () => {
    const response = await request(app).get('/path-that-does-not-exist');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toContain("Can't find");
  });

  // Add more tests as needed
});
