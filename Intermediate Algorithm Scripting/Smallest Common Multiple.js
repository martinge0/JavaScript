function smallestCommons(inputUnsorted) {
    function Primes(num) {
        let result = [];
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
                result.push(i);
            }
        }
        return result;
    }
    
    
    let input = inputUnsorted.sort((a, b) => a - b);
    let primes = [];
    let arr = [];
    for(let i = input[0]; i <= input[1]; i++){
        arr.push(i);
    }
    primes = Primes(input[1]);
    
    let result = 1;
    for( let i = 0; i < primes.length; i++){
        let test = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[j] != 1){
                if(arr[j] % primes[i] == 0){
                    arr[j] = arr[j] / primes[i];
                    test ++;
                }
            }
        }
        if(test > 0){
            result *=primes[i];
            i --;
        }
    }
      return result;
    }
    
    
    smallestCommons([1,5]);
    