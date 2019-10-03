function frankenSplice(arr1, arr2, n) {
    let index = n;
    let result = [];
    let temp = [];
    result = arr2.slice(0,index);
    temp = arr2.slice(index,);
    result.push(...arr1);
    result.push(...temp);
      return result;
    }