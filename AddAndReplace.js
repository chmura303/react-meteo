const user = {
  id: 1,
  age: 18,
};
console.log(user); // { id: 1, age: 18 }

// add key/value pair
const newUser = { ...user, name: 'Gadek' };

console.log(newUser); // { id: 1, age: 18, name: 'Gadek' }

// remove key/value pair
const { id, ...rest } = user;

console.log(rest); // { age: 18 }
