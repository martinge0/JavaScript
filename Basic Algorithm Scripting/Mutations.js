function mutation(str) {

    let charZero = [];
    let charOne = [];
    
    for (let i = 0; i< str[0].length; i++){
            charZero.push(str[0].toLowerCase().charAt(i));
    }
    
    for (let i = 0;i < str[1].length; i++ ){
        charOne.push(str[1].toLowerCase().charAt(i));
    }
    let charZeroSorted = charZero.sort();
    let charOneSorted = charOne.sort();
    
    let lengthShort = 0;
    let lengthLong = 0;
    let charShort = [];
    let charLong = [];
    
    if(charZeroSorted.length <= charOneSorted.length){
        lengthShort = charZeroSorted.length;
        lengthLong = charOneSorted.length;
        charShort = charZeroSorted;
        charLong = charOneSorted;
    }
    else{
        lengthShort = charOneSorted.length;
        lengthLong = charZeroSorted.length;
        charShort = charOneSorted;
        charLong = charZeroSorted;
    }
    
    let result = true;
    check:
    for (let i = 0; i < lengthShort; i++){
        for(let j = 0; j < lengthLong; j++){
            if(charShort[i] == charLong[j]){
                result = true;
                break;
            }
            else{
                result = false;
                if(j == lengthLong-1){
                    return result;
                    break check;
                }            
            }
        }
    }
      return result;
    }


