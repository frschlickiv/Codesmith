const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'}
];

console.log(courses.includes({id: 1, name: 'a'}));

//This will return false because the object in the console log and the object in the courses array are in different 
//parts of memory. If you have an array with reference types (like an object) the you have to use the find method. 

let found = courses.find(function(course) {
    return course.name === 'a'
});

console.log(found);


let founded = courses.findIndex(function(course) {
    return course.name === 'b'
});

console.log(founded);

// this CallBack Function acts to find the index of an item in an array. THIS IS USED FOR REFERENCE TYPES