const map = (list, method) => {
  list.forEach(function (part, index, list) {
    list[index] = method(list[index]);
  });
  return list;
};
module.exports = map;
