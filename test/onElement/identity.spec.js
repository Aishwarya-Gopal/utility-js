const identity = require('../../src/onElement/identity');
describe('Identity', () => {
  it('Identity of [] should give []', () => {
    expect(identity([])).toEqual([]);
  });

  it('Identity of [1, 2, 3] should give [1, 2, 3]', () => {
    expect(identity([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
