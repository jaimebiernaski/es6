function* colors() {
  yield 'red';
  yield 'green';
  yield 'blue';
}

const gen = colors();
console.log('gen 1', gen.next());
console.log('gen 2', gen.next());
console.log('gen 3', gen.next());
console.log('gen 4', gen.next());

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

console.log('myColors', myColors);
