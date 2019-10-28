const { getStatusName, getStatusCode } = require('..');

test('getStatusName', () => {
  expect(getStatusName(400)).toBe('BadRequest');
});

test('getStatusCode', () => {
  expect(getStatusCode('BadRequest')).toBe(400);
});