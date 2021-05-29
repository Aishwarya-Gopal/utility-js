const tail = (list) => {
  if (list.length === 0) return [];
  return list[list.length - 1];
};
module.exports = tail;
