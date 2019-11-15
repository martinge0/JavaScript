function binaryAgent(str) {
    let arrD = [128,64,32,16,8,4,2,1];
    let arrB = str.split(" ");
    let result = "";
    let resultArr = [];
    for( let i =0; i< arrB.length; i++){
        let compare = arrB[i];
        let ascii = 0;
        for(let j = 0; j < 8; j++){
            if(compare[j] == 1){
                ascii += arrD[j];
            }
        }
        resultArr.push((String.fromCharCode(ascii)));
    }
    result = resultArr.join('');
      return result;
    }
    
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
    