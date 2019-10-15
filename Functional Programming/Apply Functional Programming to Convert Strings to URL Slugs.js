// the global variable
var globalTitle = "Winter Is Coming";


function urlSlug(title) {

let globalTitleArr = title.toLocaleLowerCase().split(" ").filter(item => item !== "");
let result = globalTitleArr.join("-");

return result;  
}


var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"