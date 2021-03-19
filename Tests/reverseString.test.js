const reverseString = require('../src/reverseString');
test('It should reverse a string', () => {
  expect(reverseString('kalu')).toEqual('ulak');
  expect(reverseString('kalu')).not.toBe('kalu');
});