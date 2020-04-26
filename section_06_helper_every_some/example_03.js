function Field(value){
    this.value = value;
};

Field.prototype.validate = function(){
 return this.value.lenght > 0;
}

var username = new Field("john");
var password = new Field("myPassword");
var birthdate = new Field("");

//username.validate() && password.validate() && password.validate

var fields = [ username, password, birthdate];

var check = fields.every(function(field){
    return field.validate();
});

console.log('Check Pass:', check);




