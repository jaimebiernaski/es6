/**
 * Refactoring the example_03.js using the Symbol Iterator
 *
 * Symbol Iterator: Is a tool that teaches objects how to respond
 * to the for loop.
 */

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  // Symbol iterator
  *[Symbol.iterator]() {
    yield this.lead;
    yield this.tester;
  },
};

// Whith the symbol interator the TestingTeamInterator is not necessary
// function* TestingTeamInterator(team) {
//   yield team.lead;
//   yield team.tester;
// }

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  *[Symbol.iterator]() {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  },
};

function* TeamInterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  //Remove the lines bellow to use the symbol interator
  //Generator delegation : Connecting interator functions
  //const testingTeamGenerator = TestingTeamInterator(team.testingTeam);
  //yield* testingTeamGenerator; // yield* : go into the yields of generator
  yield* team.testingTeam;
}

const names = [];

for (let name of TeamInterator(engineeringTeam)) {
  names.push(name);
}

console.log('names', names);
