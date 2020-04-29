const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
};

function* TestingTeamInterator(team) {
  yield team.lead;
  yield team.tester;
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
};

function* TeamInterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  //Generator delegation : Connecting interator functions
  const testingTeamGenerator = TestingTeamInterator(team.testingTeam);
  yield* testingTeamGenerator; // yield* : go into the yields of generator
}

const names = [];

for (let name of TeamInterator(engineeringTeam)) {
  names.push(name);
}

console.log('names', names);
