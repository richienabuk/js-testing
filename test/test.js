var expect = require('chai').expect;
var { add, subtract } = require('../Calculate');

describe('addTwoNumbers()', function () {
  it('should add two numbers', function () {

    // 1. ARRANGE
    var x = 5;
    var y = 1;
    var sum1 = x + y;

    // 2. ACT
    var sum2 = add(x, y);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);

  });

  it('should subtract two numbers', function () {

    // 1. ARRANGE
    var x = 5;
    var y = 1;
    var sum1 = x - y;

    // 2. ACT
    var sum2 = subtract(x, y);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);

  });

  it('should compare two values', function () {
    expect(200).eql(200);
    expect({tell: 'two'}).to.be.an('object');
    expect('success').to.eql('success');
  })
});
