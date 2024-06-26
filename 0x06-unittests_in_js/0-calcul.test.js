// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('should handle mixed sign numbers correctly', function() {
    assert.strictEqual(calculateNumber(-1.2, 3.7), 3);
  });

  it('should handle zero correctly', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should round correctly near .5 boundaries', function() {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
    assert.strictEqual(calculateNumber(2.4, 2.4), 4);
    assert.strictEqual(calculateNumber(-2.5, -2.5), -6); // Corrected to -6
    assert.strictEqual(calculateNumber(-2.4, -2.4), -4);
  });
});
