const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should resolve with correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        // Check if the response data matches the expected value
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate the async test is complete
      })
      .catch(err => {
        done(err); // Call done with error if there's an issue
      });
  });

  // Optionally add more tests for other scenarios if needed
});
