const reduce = require('../src/reduce');

describe('Reduce', () => {
  it('Reduce for [1, 2, 3] on (x,y)=>x+y should give 6', () => {
    expect(reduce([1, 2, 3], (x, y) => x + y)).toEqual(6);
  });

  it('Reduce for [] on (x,y)=>x+y should give be undefined', () => {
    expect(reduce([], (x, y) => x + y)).toBeUndefined();
  });

  it('Reduce for [] on (x,y)=>x+y and default value 10 should give 10', () => {
    expect(reduce([], (x, y) => x + y, 10)).toEqual(10);
  });

  it('Reduce for ["a","b","c" on (x,y)=>x+y) should give "abc"', () => {
    expect(reduce(['a', 'b', 'c'], (x, y) => x + y)).toEqual('abc');
  });

  it('Reduce for ["a","b","c"] on (x,y)=>x+y and default value "z" should give "zabc")', () => {
    expect(reduce(['a', 'b', 'c'], (x, y) => x + y, 'z')).toEqual('zabc');
  });
});
