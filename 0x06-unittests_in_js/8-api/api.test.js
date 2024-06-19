const { expect } = require('chai');
const request = require('request');
const server = require('./api');

describe('Index page', () => {
  // Test for correct status code and response message
  it('Correct status code and result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Additional test cases can be added here
});
