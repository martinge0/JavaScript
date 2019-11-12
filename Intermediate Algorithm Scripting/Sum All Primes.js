function sumPrimes(num) {
    let result = 0;
    let arr = [];
    for(let i = 0; i<=num; i++){
        arr.push(0);
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(arr[i] == 0){
            let j = i;
            while( i*j <= num){
                arr[i*j] = 1;
                j++;
            }
        }
    
    }
    for( let i = 2; i <= num; i++){
        if (arr[i] == 0){
            result += i;
        }
    }
      return result;
    }
    
    sumPrimes(10);
    