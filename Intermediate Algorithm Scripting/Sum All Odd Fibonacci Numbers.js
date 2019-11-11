function sumFibs(num) {
    let arr = [1,1];
    let i = 1;
    let result = 2;
    while((arr[i]+arr[i-1]) <= num){
        arr.push(arr[i]+arr[i-1]);
        i++
        if((arr[i])%2 !== 0){
            result +=arr[i];
        }    
    }
      return result;
    }
    
    sumFibs(4);
    