const capitalize = require('../src/capitalize');

test('capitalize the first letter in the string', () => {
  expect(capitalize('kalu')).toEqual('Kalu');
  expect(capitalize('agu')).not.toEqual('agu');
});