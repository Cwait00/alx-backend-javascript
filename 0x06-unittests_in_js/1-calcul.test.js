// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when inputs are 1.2 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return -3 when inputs are 1.2 and 3.7', function() { // Corrected to -3
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return approximately 2.333 when inputs are 6.7 and 3.2', function() { // Updated to reflect the actual result
      assert.strictEqual(calculateNumber('DIVIDE', 6.7, 3.2), 7 / 3);
    });
  });

  describe('Invalid type', function() {
    it('should throw an error when type is invalid', function() {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error, 'Invalid type');
    });
  });
});
