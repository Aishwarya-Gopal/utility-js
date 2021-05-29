const map = require('../src/map');
const cube = require('../src/cube');
const identity = require('../src/identity');

describe('Map', () => {
  it('Map of [] and cube should give []', () => {
    expect(map([], cube)).toEqual([]);
  });

  it('Map of [1, 2, 3] and cube should give [1, 8, 27]', () => {
    expect(map([1, 2, 3], cube)).toEqual([1, 8, 27]);
  });

  it('Map of [1, 2, 3] and identity should give [1, 2, 3]', () => {
    expect(map([1, 2, 3], identity)).toEqual([1, 2, 3]);
  });

  it('Map of [{ x: 10 }] and someObject should give [11]', () => {
    obj = [{ x: 10 }];
    expect(map([{ x: 10 }], someObject => someObject.x + 1)).toEqual([11]);
  });
});
