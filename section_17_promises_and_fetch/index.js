//Create a promisse

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(); // enter into the resolved state
    // reject('Promisse rejected'); // enter into the rejected state
  }, 500);
});

promise
  .then(() => console.log('Finished'))
  // .then(() => console.log('Finished once more'))
  .catch((err) => console.log('ERROR:', err));

console.log('promisse', promise);

// THE FETCH HELPER

const url = 'https://jsonplaceholder.typicode.com/posts/';
fetch(url)
  .then((reponse) => reponse.json())
  .then((data) => console.log(data));

/**
 * Difference the catch to other libraries like AXIOS
 * FETCH will enter on .catch, just if the URL is invalid.
 * If the URL is valid, but the get a return of 404,
 * (and invalid page on a valid URL) the Fetch
 * does not enters on the the .catch... even with status not ok and error 404.
 */
