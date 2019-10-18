function destroyer(arr) {
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

    let arg = Array.prototype.slice.call(arguments);
    let arrOne = arg.shift();
    let arrTwo = arg;
    
    return diffArray(arrOne,arrTwo);

}