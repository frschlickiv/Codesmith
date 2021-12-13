const numbers = [3, 4];

// end
numbers.push(5, 6);


//beginning

numbers.unshift(1, 2)

// middle

numbers.splice(2, 2, 'a', 'b')
//first parameter is the index where the new elements are placed || second is the number of elements 
// deleted || third is the added elements
console.log(numbers);