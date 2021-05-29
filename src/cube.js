const cubeItem = (item) => {
  return Math.pow(item, 3);
};

const cube = (list) => {
  return list.map((item) => cubeItem(item));
};

module.exports = cube;
