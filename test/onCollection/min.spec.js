const min = require('../../src/onCollection/min');

describe('Min', () => {
  it('Min for [3, 2, 1, 4] should return 1', () => {
    expect(min([3, 2, 1, 4])).toEqual(1);
  });

  it('Min for [5, 4, 3, 2] should return 2', () => {
    expect(min([5, 4, 3, 2])).toEqual(2);
  });
});
