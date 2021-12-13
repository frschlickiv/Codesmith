function Circle (radius) {
    this.radius = radius        //this is a reference keyword => references an object.
    this.draw = function() {
        console.log('draw');
    }
    
}


const another = new Circle(1)
Circle.call({}, 1)

