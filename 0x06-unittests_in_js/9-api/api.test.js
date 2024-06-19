const { expect } = require('chai');
const request = require('request');

describe('Testing /cart/:id endpoint', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct payment methods for valid :id', (done) => {
    const id = 123;
    request.get(`${baseUrl}/cart/${id}`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(`Payment methods for cart ${id}`);
      done();
    });
  });

  it('should return 404 for non-numeric :id', (done) => {
    const id = 'hello';
    request.get(`${baseUrl}/cart/${id}`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Not Found');
      done();
    });
  });

  it('should return 404 for empty :id', (done) => {
    request.get(`${baseUrl}/cart/`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Not Found');
      done();
    });
  });
});
