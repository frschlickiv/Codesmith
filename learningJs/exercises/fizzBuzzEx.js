// number is divisible by 3 => fizz
//number is divisible by 5 = buzz
// divisible by both 3 and => fizzBuzz
// not divisible by 3 or 5 => input
// not a number => nan

const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';


    return input;
}

