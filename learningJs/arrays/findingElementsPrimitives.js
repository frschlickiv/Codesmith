const numbers = [1, 2, 3, 4, 1, 5 ]
numbers.indexOf(1)  

// we pass the element we are looking for, and if that element exists in the 
// array it will return the index of the element. If it's not there, it will return -1. 

 /* IF YOU PASS A STRING THAT IS NOT === TO WHAT IS IN THE ARRAY IT WILL RETURN - 1 */


 console.log(numbers.lastIndexOf(1));

 // this method simply checks the last index of the argument in the array. In this case it's index [5]


 console.log(numbers.includes(7));

 // this method is used to check if the argument exists in the array *** IT WILL RETURN A BOOLEAN ***