const isUpperCase = require('../src/isUpperCase');

describe('IsUpperCase', () => {
  it('IsUpperCase for "A" is true', () => {
    expect(isUpperCase('A')).toEqual(true);
  });

  it('IsUpperCase for "a" is false', () => {
    expect(isUpperCase('a')).toEqual(false);
  });
});
