function checkPositive(arr) {

    return arr.some(function(curentValue){
      return curentValue > 0
    });
    }
    checkPositive([1, 2, 3, -4, 5]);