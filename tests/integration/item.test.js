const request = require('supertest');
const app = require('../../app');

describe('Item API', () => {
  it('should add and retrieve items', async () => {
    await request(app).post('/items').send({ item: 'Book' }).expect(201);
    const res = await request(app).get('/items').expect(200);
    expect(res.body).toContain('Book');
  });
});
