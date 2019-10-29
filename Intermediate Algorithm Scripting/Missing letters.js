function fearNotLetter(str) {
    let result;
    const  alfabet = "abcdefghijklmnopqrstuvwxyz";
    let firstLetter = -1;
    
    for ( let i=0; i < str.length; i++ ){
        firstLetter = alfabet.indexOf(str[i]);
        if(firstLetter > -1){
            break;
        }
    }
    
    for ( let i = 0; i < str.length; i++){
        
        if (str[i] !== alfabet[firstLetter+i]){
    
            result = alfabet[firstLetter+i];
            break;
        }
    
    }
      return result;
    }
    
    fearNotLetter("abce");
    