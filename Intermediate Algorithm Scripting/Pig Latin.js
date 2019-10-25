function translatePigLatin(str) {

    let strArr = str.split('');
    let endStr = [];
    let tempStr = [...strArr];
    
    for ( let i = 0; i < strArr.length; i++){
        let c = strArr[i];
        if( c=='a' | c=='e' | c=='i' | c=='o' | c=='u'){
            break;
        }
        endStr.push(c);
        tempStr.shift()
        
    }
    
    let result = "";
    if (endStr.length == 0){
        result = str+"way";
    }
    else if (endStr.length == str.length){
        result = str+"ay";
    }
    else{
        result = tempStr.join('')+endStr.join('')+"ay";
    }
      return result;
    }
    
    translatePigLatin("consonant");
    