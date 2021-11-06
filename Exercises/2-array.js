'use strict';

const array = () => {
  const array = [];
  const fn = (i) => array[i];
  fn.push = (element) => array.push(element);
  fn.pop = () => array.pop();
  return fn;
};

module.exports = { array };
