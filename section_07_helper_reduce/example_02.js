var primaryColors = [
    {color:'red'}, 
    {color:'yellow'}, 
    {color:'blue'}
];

// array ['red','yellow','blue'];

var array = primaryColors.reduce(
    function(acc,cur){
        acc.push(cur.color);
        return acc;
    },[]);

console.log('Array:', array);



