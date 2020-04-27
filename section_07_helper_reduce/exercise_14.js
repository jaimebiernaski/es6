/*
 * Use the 'reduce' helper to find the sum of all the distances traveled.
 * Assign the result to the variable 'totalDistance'
 */

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(
    function(acc,cur){ 
        acc += cur.distance;
        return acc;
    },0);

console.log('Distance:', totalDistance);
