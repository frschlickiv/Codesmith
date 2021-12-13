const circle = {
    radius : 1
};


circle.color = 'yellow';
circle.draw = function(){
    console.log('squiggly')
};

delete circle.color;
delete circle.draw;

circle.shade = "dark"


console.log(circle);

