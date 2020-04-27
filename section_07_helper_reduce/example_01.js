var numbers = [10,20,30];
var sum = 0;

for (var i=0; i < numbers.length; i++){
    sum += numbers[i];
};

console.log('Sum with for:', sum);

var reduceSum = numbers.reduce( 
    function(acc, cur){ 
        return acc+cur
    },0);

console.log('Sum with reduce:', reduceSum);
