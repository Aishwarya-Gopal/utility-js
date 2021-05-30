const map = (list, method) => {
  list.forEach(function (item, index, list) {
    list[index] = method(item);
  });
  return list;
};
module.exports = map;
