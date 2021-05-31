const reduce = (array, reducer, accumulator = undefined) => {
  if (typeof array[0] === 'number' && accumulator === undefined) accumulator = 0;
  if (typeof array[0] === 'string' && accumulator === undefined) accumulator = '';
  array.forEach(function (item) {
    accumulator = reducer(accumulator, item);
  });
  return accumulator;
};

module.exports = reduce;
