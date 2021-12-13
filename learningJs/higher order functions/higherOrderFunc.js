/*var triple =function(x){
    return x * 3
}

var waffle = triple
//functions are values. Javascript can assign functions to variables. This allows for NON OBJECT ORIENTED PROGRAMMING
waffle(30) */




//FILTER > a Higher order functions

var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro',       species: 'dog'},
    {name: 'Hamilton',   species: 'dog'},
    {name: 'Harold',     species: 'fish'},
    {name: 'Ursula',     species: 'cat'},
    {name: 'Jimmy',      species: 'fish'},
]

/*
var dogs = []
for (var i = 0; i< animals.length; i++){
    if (animals[i].species === 'dog')
    dogs.push(animals[i])
}
  
 console.log(dogs);
*/


var dogs = animals.filter(function(animal){
    return animal.species === 'dog'
})


var isDog = function(animal){
    return animal.species === 'dog'
}
var dogs = animals.filter(isDog)
var otherAnimals = animals.reject(isDog)