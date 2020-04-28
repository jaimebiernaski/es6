const defaultColors = ['red', 'green'];
const userColors = ['yellow', 'blue'];

console.log('All colors with contact:', defaultColors.concat(userColors));
//with spread operator ... > gets the content of the param
console.log('All colors with spread :', [...defaultColors, ...userColors]);

const fallColors = ['red', 'orange'];

console.log('Different sources:', [
  'gray',
  ...defaultColors,
  ...userColors,
  ...fallColors,
]);
