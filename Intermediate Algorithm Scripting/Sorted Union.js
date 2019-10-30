function uniteUnique(arr) {
    let inputArr = Array.prototype.slice.call(arguments);
    let result = inputArr[0];
    for (let i = 1; i < inputArr.length; i++){
      for(let j = 0; j < inputArr[i].length; j++){
        if( result.indexOf(inputArr[i][j]) == -1){
            result.push(inputArr[i][j]);
        }
    }
}
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
