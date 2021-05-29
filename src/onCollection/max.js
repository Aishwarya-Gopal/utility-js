const reduce = require('./reduce');
const max = (list) => {
  return reduce(list, function (val1, val2) {
    return (val1 > val2 ? val1 : val2);
  }, list[0]);
};
module.exports = max;
