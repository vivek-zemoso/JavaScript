const add = (num1, num2) => (num1 + num2);

const sum = (str, add) => {
    console.log(`sum of 3 and 4 is ${add(3, 4)}`);
}

sum('random', add);