function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999;
}

function createAdminUser(user) {
  user.admin = true;
  return user;
}

createAdminUser(new User(generateId()));

//V2

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

//from scratch
createAdminUser();

//turn a user in an Admin
const user = new User(generateId());
createAdminUser(user);
