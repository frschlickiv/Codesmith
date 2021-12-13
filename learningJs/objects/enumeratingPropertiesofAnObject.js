const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
};

for (let key in circle){
    console.log(`This key is ${key} and its value is ${circle[key]}`);
}
/*for (let key of Object.keys(circle));
console.log(key);*/
/*for (let key in circle)         
console.log(key, circle[key]); */






//for (let key of circle) => ERROR  // can only be used with iterables, such as arrays and maps 
//console.log(key);

//YOU CAN ONLY USE OF LOOPS ON OBJECTS WHEN USING THE Obect.entries OR Object.keys constructor.

for (let entry of Object.entries(circle))
console.log(entry);

for (let key of Object.keys(circle))
console.log(key);


function Object() {
    const x = {value: 1};
}

if ('radius' in circle) console.log('yes'); // if a given property exists in a given object