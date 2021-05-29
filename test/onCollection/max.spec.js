const max = require('../../src/onCollection/max');

describe('Max', () => {
  it('Max for [3, 2, 1, 4] should return 4', () => {
    expect(max([3, 2, 1, 4])).toEqual(4);
  });

  it('Max for [5, 4, 3, 2] should return 5', () => {
    expect(max([5, 4, 3, 2])).toEqual(5);
  });
});
