const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(function() {
    // Create a stub for Utils.calculateNumber
    this.stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the stub and spy after each test
    this.stubCalculateNumber.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM type and correct arguments', function() {
    sendPaymentRequestToApi(100, 20);

    // Check if Utils.calculateNumber was called with the correct arguments
    expect(this.stubCalculateNumber.calledOnce).to.be.true;
    expect(this.stubCalculateNumber.calledWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log correct message to console', function() {
    sendPaymentRequestToApi(100, 20);

    // Check if console.log was called with the correct message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;
  });

  // Add more tests as needed
});
