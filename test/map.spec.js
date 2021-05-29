const map = require('../src/map');
const cube = require('../src/cube');
const head = require('../src/head');
const tail = require('../src/tail');
const identity = require('../src/identity');

describe('Map', () => {
  it('Map of [] and cube should give []', () => {
    expect(map([], cube)).toEqual([]);
  });

  it('Map of [1, 2, 3] and head should give 1', () => {
    expect(map([1, 2, 3], head)).toEqual(1);
  });

  it('Map of [1, 2, 3] and tail should give [2, 3]', () => {
    expect(map([1, 2, 3], tail)).toEqual([2, 3]);
  });

  it('Map of [1, 2, 3] and identity should give [1, 2, 3]', () => {
    expect(map([1, 2, 3], identity)).toEqual([1, 2, 3]);
  });
});
