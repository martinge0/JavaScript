function sliceArray(anim, beginSlice, endSlice) {

    let newArray = anim.slice(beginSlice, endSlice);
  
      return newArray
  }
  
  
  
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);