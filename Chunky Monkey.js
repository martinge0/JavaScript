function chunkArrayInGroups(arr, size) {
    let length = arr.length;
    let arrTemp = [];
    let result = [];
    
    do
    {
        arrTemp = arr.splice(0,size);
        result.push(arrTemp);
    }
    while(arr.length >= 1)
    
      return result;
    }
    
    chunkArrayInGroups(["a", "b", "c", "d"], 2);