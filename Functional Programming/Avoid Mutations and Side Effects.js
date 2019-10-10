// the global variable
var fixedValue = 4;

function incrementer () {

  var  increment = fixedValue + 1;
  return increment
  
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4