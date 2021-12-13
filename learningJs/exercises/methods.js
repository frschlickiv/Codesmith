const nums = [2, 5, 7, 1, 3, 3, 9];


const sum = nums.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 0);

console.log(sum)