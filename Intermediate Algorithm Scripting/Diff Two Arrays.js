function diffArray(arr1, arr2) {
    function checkAny(arr,item) {
  
      return arr.some(function(curentValue){
        return curentValue === item;
      });
      }
  
  let result = [];
  
  for (let i = 0; i < arr1.length; i++){
      if(checkAny(arr2, arr1[i]) !== true){
          result.push(arr1[i]);
      }
  }
  
  for (let i = 0; i < arr2.length; i++){
      if(checkAny(arr1,arr2[i]) !== true){
          result.push(arr2[i]);
      }
  }
    return result;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  