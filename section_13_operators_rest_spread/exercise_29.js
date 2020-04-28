/**
 * Refactor the following function to use the rest operator
 */

function product(a, b, c, d, e) {
  var numbers = [a, b, c, d, e];

  return numbers.reduce(function (acc, number) {
    return acc * number;
  }, 1);
}

function product(...numbers) {
  return numbers.reduce(function (acc, number) {
    return acc * number;
  }, 1);
}
