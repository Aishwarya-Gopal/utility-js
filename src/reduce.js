const reduce = (array, reducer, value = undefined) => {
  if (typeof array[0] === 'number' && value === undefined) value = 0;
  if (typeof array[0] === 'string' && value === undefined) value = '';
  array.forEach(function (item) {
    value = reducer(value, item);
  });
  return value;
};

module.exports = reduce;
