// ADD CODE HERE
const multiMap = (array, callbacks) => {
    let result = {}
    let callResults = []
    
    array.forEach((el) => {
      callbacks.forEach((call) => {
        callResults.push(call(el))
      })
      result[el] = callResults
    })
    return result;
  }
  
  

  function uppercaser(str) { return str.toUpperCase(); }
  function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
  function repeater(str) { return str + str; }
  const items = ['catfood', 'glue', 'beer'];
  const functions = [uppercaser, capitalize, repeater];
   console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }