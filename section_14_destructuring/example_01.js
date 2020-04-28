let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

let expense = {
  type: 'Business',
  amount: '$45 USD',
};
const { type, amount } = expense;
console.log(type, amount);

var savedFiles = {
  extension: 'jpg',
  name: 'report',
  size: 10401,
};

const fileSummary = ({ name, extension, size }, { color }) => {
  console.log(name, extension, size, color);
};

fileSummary(savedFiles, { color: 'red' });

/**
 * DESTRUCUTING  ARRAYS
 *
 * TO DESTRUCT PROPERTIES USE []
 * TO DESTRICT ELEMENTS USE {}
 */

const arr = [1, 2, 3, 4, 5, 6];
const [n1, n2, n3, ...others] = arr;
const { length } = arr;

console.log('numbers', n1, n2, n3, ...others);
console.log('length', length);

/**
 * DESTRUCTURING ARRAYS & OBJECTS
 */

const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' },
];

//  [ The fist element of the array]
//  [{the property of the first element of the array}]
var [{ location }] = companies;
console.log('Location of the 1st element:', location);

/////////////////////
const Google = {
  locations: ['Mountain View', 'New York', 'London'],
};

const {
  locations: [firstLoc],
} = Google;
console.log(firstLoc);

////////////////////////////

//Raw Data

const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];
console.log('Input', points);

//Transform the structure to

const input = [
  { x: 4, y: 5 },
  { x: 10, y: 1 },
  { x: 0, y: 40 },
];

// Transforming using map and destructing

const result = points.map(([x, y]) => {
  return { x, y };
});

console.log('Resutl', result);
