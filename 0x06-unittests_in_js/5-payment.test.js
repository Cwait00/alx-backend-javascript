const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(function() {
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when called with totalAmount = 100 and totalShipping = 20', function() {
    sendPaymentRequestToApi(100, 20);

    // Check if console.log was called with the correct message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when called with totalAmount = 10 and totalShipping = 10', function() {
    sendPaymentRequestToApi(10, 10);

    // Check if console.log was called with the correct message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });

  // Add more tests as needed

});
