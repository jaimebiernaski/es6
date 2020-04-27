const add = function(a,b){
    return a + b;
};

console.log('SUM:', add(1,2));

const add2 = (a,b) => a + b;

console.log('SUM:', add2(2,3));


const team = {
    members: [ 'Jane', 'Bill'],
    teamName: 'Squad',
    teamSummary: function() { 
        return this.members.map((m)=>`${m} of ${this.teamName}`
    }
};

console.log(team.teamSummary());
