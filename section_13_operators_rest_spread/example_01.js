/**
 * Spread: Spread, expand the elements of the array
 */

// Add elements of an existing arrau into a new array

let someVogals = ['e', 'i'];
let allVogals = ['a', ...someVogals, 'o', 'u'];
console.log('Vogals', allVogals);

// Pass elements of an array as arguments to a function

const addTreeNumbers = (x, y, z) => {
  console.log(`${x} + ${y} + ${z} = `, x + y + z);
};
var args = [0, 1, 2];
addTreeNumbers(...args);

// Copy Arrays

var arr = [1, 2, 3];
var arrCopy = [...arr];
arrCopy.push(4);
console.log('Arr Original:', arr);
console.log('Arr Copy:', arrCopy);

// Concatenate arrays

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
let arr3 = [...arr1, ...arr2];
console.log('Concatenate arrays', arr3);

/**
 * Rest: Condense multiple elements into an array
 */

// multiply each argument by the multiplier as the first element

const multiplier = (mult, ...numbers) => {
  return numbers.map((number) => number * mult);
};
const multiplyBy = 2;
console.log(
  `Multiplier args by ${multiplyBy}`,
  multiplier(multiplyBy, 1, 2, 4, 3)
);
