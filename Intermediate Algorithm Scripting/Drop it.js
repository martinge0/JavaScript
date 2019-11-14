function dropElements(arr, func) {
    let result = [...arr];
    let i = 0;
    while(!func(arr[i]) && i < arr.length){
        result.shift();
        i++
    }
      return result;
    }
    
    dropElements([1, 2, 3], function(n) {return n < 3; });
    