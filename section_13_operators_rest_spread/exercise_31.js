/**
 * Refactor the following function to use only the rest operator
 */

function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

function unshift(array, ...elements) {
  return [...elements, ...array];
}
