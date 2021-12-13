// Falsy (false)
// undefined
//null
//0
//false
//''
//NaN

//Anything that is not Falsy --> Truthy

false || true 
// true

false || 'Fred'
//Fred

false || 1
// 1

false || 1 || 2 
// 1
// This will be read left to right until it returns a true or truthy statement.
//THIS IS CALLED SHORT CIRCUITING


let userColor = red;
let defaultColor = blue;
let currentColor = userColor || defaultColor;

console.log (currentColor);
// --> red
//because it was the first truthy returned statement

//another option
let userColor = undefined;
let defaultColor = blue;
let currentColor = userColor || defaultColor;
console.log (currentColor);
// --> Blue
//because the first operand in currentColor is undefined.