function Car(model){
    this.model = model;
}

var cars = [
 new Car('Tesla'),
 new Car('BWM'),
 new Car('Audi')
]

var result = cars.find( function(car){
    return car.model === 'Tesla'
});

console.log(result);

var posts = [
    { id:1, title: 'New Post'},
    { id:2, title: 'Old Post'}
];

var comment = { postId: 1, content: 'Great Post'};

function postForComment(post, comment){
    return posts.find( function (post){
        return post.id === comment.postId;
    });
};

console.log('Post For Comment:',postForComment( posts, comment));
