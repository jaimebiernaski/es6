// Create an array
var numbers = [1,2,3,4,5];

// Create a variable to hold the sum 
var sum1 = 0;
var sum2 = 0;

// Loop over the array, increasing the sum variable
numbers.forEach(
    function(number){
        sum1 += number
    }
);

console.log("Sum1 =", sum1 );

/* Passing function as reference:
 *
 * if call with adder() with "()", numbers.forEach(adder());
 * the function adder will immediately run and returns results for 
 * the forEach function.
 *
 * Calling without "()", passes just the reference for future use.
 * */

function adder(number){
    sum2 += number;
}

numbers.forEach(adder)

// Print the sum variable
console.log("Sum2 =", sum2 );
