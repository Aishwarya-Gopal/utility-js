const cube = require('../../src/onElement/cube');

describe('Cube', () => {
  it('Cube of 1 should be 1', () => {
    expect(cube(1)).toEqual(1);
  });

  it('Cube of 2 should be 8', () => {
    expect(cube(2)).toEqual(8);
  });
});
