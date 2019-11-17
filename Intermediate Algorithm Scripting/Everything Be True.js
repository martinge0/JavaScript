function truthCheck(collection, pre) {

    let result = true;
    for (let i = 0; i < collection.length; i++){
        if(collection[i].hasOwnProperty(pre) == false){
            result = false;
            break;
        }
        else if(Boolean(collection[i][pre]) == false){
          result = false;
        }
    }
      return result;
    }
    
    truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
    