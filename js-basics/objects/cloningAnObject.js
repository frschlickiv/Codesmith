const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
};

// const another = {}

// for (let key in circle)                 //This is the Old way of cloning an Object, lets look at a new way. 
// another[key] = circle[key];

// another ['radius'] = circle [key];

// another ['radius']


//the code below is the same as the above. 

// const another = Object.assign({}, circle)




const another = {...circle}; // the spread operator (...) takes all the properties of the declared object and puts them in a new object.
                            // this copies an object. 




console.log(another);