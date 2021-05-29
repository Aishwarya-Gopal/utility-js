const filter = (list, method) => {
  const filteredList = [];
  list.forEach(function (item) {
    if (method(item)) { filteredList.push(item); }
  });
  return filteredList;
};
module.exports = filter;
