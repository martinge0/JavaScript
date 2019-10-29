function pairElement(str) {
    let result = [];
    let strArr = str.split('');
    for( let i = 0; i < strArr.length; i++){
        let pair = [];
        switch (strArr[i]){
            case 'A': pair = ['A','T'];
            break;
            case 'T': pair = ['T','A'];
            break;
            case 'G': pair = ['G','C'];
            break;
            case 'C': pair = ['C','G'];
            break;
        }
        result.push(pair);
    }
      return result;
    }
    
    pairElement("GCG");
    