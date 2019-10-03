function getIndexToIns(arr, num) {
    arr.sort((a,b) => a - b );
    console.log(arr);
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        if(num <= arr[i]){
            result = i;
            break;
        }
        else{
          result = i+1;
        }
    }
      return result;
    }