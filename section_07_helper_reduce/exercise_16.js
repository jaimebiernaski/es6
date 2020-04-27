/*
 * Another really hard one! Write a function called 'unique' that 
 * will remove all the duplicate values from an array.
 *
 * For example, given the following array:
 * var numbers = [1, 1, 2, 3, 4, 4];
 * Your function should return
 * [1, 2, 3, 4]
 * Hint: Use the 'reduce' and 'find' helpers. &nbsp;
 */

function unique(array) {
    return array.reduce(
        function(acc,cur){
            if (!acc.find( el => el === cur )) { 
                acc.push(cur);
            };
            return acc;
        },[]);
};

console.log('Unique', unique([1, 1, 2, 3, 4, 4]));

