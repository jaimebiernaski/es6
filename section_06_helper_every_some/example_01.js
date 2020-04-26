var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Campaq', ram: 4 },
    { name: 'Dell', ram:8 }
];


// check if all computers runs a program that need > 16GB


var allComputersCanRunProgram = computers.every( function(computer){
        return computer.ram >= 16;
    });

console.log('All Computers runs the program', allComputersCanRunProgram);

// check if some computers runs the program


var someComputersCanRunProgram = computers.some( function(computer){
        return computer.ram >= 16;
    });

console.log('Some Computers runs the program', someComputersCanRunProgram);
