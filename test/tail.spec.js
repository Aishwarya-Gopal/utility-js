const tail = require('../src/tail');

describe('Tail', () => {
  it('Tail of [1, 2, 3] should be 3', () => {
    expect(tail([1, 2, 3])).toEqual(3);
  });

  it('Tail of [] should be undefined', () => {
    expect(tail([])).toEqual([]);
  });
});
