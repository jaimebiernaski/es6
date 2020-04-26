var products = [
 { name: "cucumber", type: "vegetable" },
 { name: "banana", type: "fruit" },
 { name: "celery", type: "vegetable" },
 { name: "orange", type: "fruit" },
];

var filteredProducts = [];
var type = 'fruit';

for (var i =0; i < products.length; i ++){
    if (products[i].type === type){
        filteredProducts.push(products[i])
    }
}

console.log('Filtered products with for:', filteredProducts);

//Its a perfect example of why keep the immutability.

var filtered = products.filter( 
    function(product){
       return product.type === type
    }
); 

console.log('Filtered products with filter:', filteredProducts);
