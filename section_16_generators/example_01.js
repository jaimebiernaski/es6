// FOR OF LOOP

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

const numbersArray = [1, 2, 3, 4];
total = 0;
for (let number of numbersArray) {
  total += number;
}
console.log(total);

/** GENERATORS **/

//add * to create a generator
function* shopping() {
  // 2. stuff on the sidewalk
  // 3. walking down the sidewalk
  // 4. go into the store with cash
  const stuffFromStore = yield 'cash'; // 1º gen stops here, 2º gen returns here
  // walking to laundry place
  const cleanClothesFromLaundry = yield 'laundry';

  //walking back home
  return [stuffFromStore, cleanClothesFromLaundry];
}

//stuff in the store
const gen = shopping(); //nothing happens on generator

console.log(gen.next()); // 1. leaving our house
// walked into the store
// walked the aisles
// pushed our stuff
console.log(gen.next('groceries')); // leaving the store with groceries
console.log(gen.next('clean Clothes')); // leaving the store with groceries
