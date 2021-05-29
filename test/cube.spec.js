const cube = require('../src/cube');

describe('Cube', () => {
  it('Cube of [1, 2, 3] should be [1, 8, 27]', () => {
    expect(cube([1, 2, 3])).toEqual([1, 8, 27]);
  });

  it('Cube of [] should be []', () => {
    expect(cube([])).toEqual([]);
  });
});
