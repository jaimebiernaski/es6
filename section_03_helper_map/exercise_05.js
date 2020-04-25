/*
 * Implement a 'pluck' function. Pluck should accept an array and 
 * a string representing a property name and return an array 
 * containing that property from each object.
 *
 * Example:
 * var paints = [ 
 *      { color: 'red' }, 
 *      { color: 'blue' }, 
 *      { color: 'yellow' }];
 *
 * pluck(paints, 'color'); 
 * returns ['red', 'yellow', 'blue'];
 */

 var paints = [ 
      { color: 'red', code: 'c' }, 
      { color: 'blue', code: 'b' }, 
      { color: 'yellow', code: 'a' },
     ];



function pluck(array, property) {
   return  array.map( function(e){
        return e[property];
    })
}

console.log(pluck(paints,'color'));

