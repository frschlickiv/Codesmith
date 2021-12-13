var newParamArr = [1, 2, 3, 4, 5];
var paramVal = ["one", "two", "three", "four", "five"];

//create an empty object to ensure it's the right type.
var obj = {};

//loop through the arrays using the first one's length since they're the same length
for(var i = 0; i < newParamArr.length; i++)
{
    //set the keys and values
    //avoid dot notation for the key in this case
    //use square brackets to set the key to the value of the array element
    obj[newParamArr[i]] = paramVal[i];
}

console.log(obj);