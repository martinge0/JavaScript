function whatIsInAName(collection, source) {
    function compareObjects (o1, o2){
    let i;    
        for( p in o2){
            if (o1.hasOwnProperty(p) & o1[p] == o2[p]){
                i = true;
            }
            else{
                i = false
                break;
            }
            
        }
            return i;
    };
    
    let check = false;
    let result = [];
    
    
    for (let i = 0; i< collection.length; i++){
        check = compareObjects(collection[i],source);
        if(check == true){
            result.push(collection[i]);
        }
    }
      return result;
    }
    
    let i = whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});
    console.log(i)