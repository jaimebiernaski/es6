/*
 * The balance parentesis problem
 * (()) > Balanced
 * ()) > not Balanced
 */

var string  = '((()()))';
//var string = '(()()))';
//var string = ')(';
//var string = '(()';


var result = !string.split('').reduce(
    function(acc,cur){
        cur === '(' && acc >= 0 ? ++acc : --acc;
        return acc;
    },0);

console.log( 'The string ', string, ' is balanced? ', result);
