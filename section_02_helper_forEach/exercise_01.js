/**
 * The code below is calling 'savePost' three times, but it is doing 
 * so using a for loop. This implementation works, but the for loop 
 * makes it more challenging to understandthe purpose of the function. 
 * Rather than using a for loop, refactor the code below to insteaduse 
 * the forEach helper.
 */

function savePost(post){
    console.log('savePost:',post);
}

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    /*
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
    */
    posts.forEach(savePost);
}

handlePosts();

