var users = [
    { id:0, name: 'Jill' },
    { id:1, name: 'Alex' },
    { id:2, name: 'Bill' },
    { id:3, name: 'Alex' }
];

// Find the Alex user

var user;

for (var i =0; i<users.length; i++){
    if (users[i].name === 'Alex'){
        user = users[i];
        break;
    }
}

console.log('User with for', user);

// Returns the value of the first element in the array that satisfies
// the provided testing function

var userFound = users.find( 
    function(user){ 
        return user.name==='Alex'
    }
);

console.log('User with find', userFound );
