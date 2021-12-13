//Function Delaration
function walk() {
    console.log('walk');
}

//Named function Expression

let run = function walk() {
console.log('run');
};
//notice how there is no semicolon after the function declaration

//anonymous function expression, instead, run will reference the finction
// it's missing the function name
let run = function ______ () {
    console.log('run');
    };

    let move = run;
    run();