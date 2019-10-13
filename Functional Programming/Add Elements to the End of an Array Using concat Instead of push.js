function nonMutatingPush(original, newItem) {

    let newArr = original.concat(newItem);
    return newArr
    
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingPush(first, second);