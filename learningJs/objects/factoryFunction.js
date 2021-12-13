
const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    isVisible: true,
    draw : function () {
        console.log('draw')
    }
}


//Factory Function

function createCircle(radius) {
    return {
        radius : radius,    // === radius: radius 
            draw() {
            console.log('draw');
        }
      };
    }

    const circle1 = createCircle(1);
    console.log(circle1)

    const circle2 = (createCircle(2));
    

    //Constructor Function
        //camel notation newCircle
        // Pascal Notation NewCircleFunction

    function circle (radius) {
        this.radius = radius        //this is a reference keyword => references an object.
        this.draw = function() {
            console.log('draw');
        }
        
    }
    const circle = new circle(1); // => new operator creates an empty object, It sets "this" to point to this object, then it returns the object.   
    const x = {};



    const another = new circle(1);