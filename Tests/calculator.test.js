const calculator = require('../src/calculator');

test('it adds two numbers', () => {
  expect(calculator.add(10, 15)).toEqual(25);
});

test('it subtracts two numbers', () => {
  expect(calculator.subtract(20, 15)).toEqual(5);
});

test('it divides two numbers', () => {
  expect(calculator.divide(10, 2)).toEqual(5);
});

test('it multiplies two numbers', () => {
  expect(calculator.multiply(10, 2)).toEqual(20);
});