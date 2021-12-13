const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'}
];

const course = courses.find((course) => {
    return course.name === 'a'
});

console.log(course)


const course = courses.find(course => course.name === 'a'); 

//this arrow function works the same way as the one above
//      We removed the parentheses because there is only one parameter
//      We remove the curly braces because there is only one line of instruction
// ******************** WHEN CALLING A FUNCTION WITH NO PARAMETERS, YOU MUST USE THE PARENTHESES************
//