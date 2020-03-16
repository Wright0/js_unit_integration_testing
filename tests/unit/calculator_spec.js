var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should return the sum of an inputted number and the previous total', function(){
    calculator.add(1);
    calculator.operatorClick("+");
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  })

  it('it should subtract an inputted number from the previous total', function(){
    calculator.previousTotal = 7
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  })

  it('it should multiply an inputted number by the previous total', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('it should divide a given number from the previous total', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  it('it should be able to input a new number', function(){
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(calculator.runningTotal, 23);
  })

  it('it should be able to chain operations', function(){
    calculator.numberClick(2);
    calculator.operatorClick("+")
    calculator.numberClick(3);
    calculator.operatorClick("+")
    calculator.numberClick(5);
    calculator.operatorClick("=")
    assert.equal(calculator.previousTotal, 10);
  })

  it('it should be able to clear a number without affecting the running total ', function(){
    calculator.numberClick(2);
    calculator.operatorClick("+")
    calculator.numberClick(3);
    calculator.operatorClick("+")
    calculator.numberClick(5);
    calculator.clearClick()
    assert.equal(calculator.runningTotal, 0);
  })


});
