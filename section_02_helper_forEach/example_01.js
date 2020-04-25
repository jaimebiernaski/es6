var colors = ["red", "green", "blue"];

console.log("\n*** js ***");
    
for(var i=0; i < colors.length; i++){
   console.log("color", i+1, colors[i]);
}

console.log("\n*** es6 ***");

colors.forEach(
    function(color, index){ 
        console.log("Color", index+1, color); 
    }
);

console.log("\n*** es6 => ***");

colors.forEach( (color, index) => console.log("Color", index+1, color) );

console.log( "\n\n2.5\n");

