/*
 * Given an array of network objects representing network requests, 
 * assign the boolean 'true' to the variable 'inProgress' if any 
 * network request has a 'status' of 'pending'.
 */

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(
    function(req){
        return req.status === 'pending'
    });

console.log('Pending requests:', inProgress);
