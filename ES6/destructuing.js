const person = {
    name: 'Noam Chomsky',
    age: 21
}

let { name: fullName, age } = person;
console.log(fullName);
console.log(age);