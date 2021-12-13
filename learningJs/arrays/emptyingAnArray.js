let numbers = [ 1, 2, 3, 4]
let another = numbers


// // Solution 1 => NOTICE THE LET OPERATOR NOT CONST
// numbers = [];

// console.log(numbers)

// // Solution 2
// numbers.length = 0;


//Solution 3 
console.log(numbers.splice(0, numbers.length));

//solution 4

// while (numbers.length > 0)
// numbers.pop();

console.log(numbers)
console.log(another)
