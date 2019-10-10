// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (fixedValue) {
  
 var increment = fixedValue + 1; 
 return increment
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4