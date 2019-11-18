function addTogether() {
    let inputArr = Array.prototype.slice.call(arguments);
    let result;
    let arg;
    if (inputArr.length == 2){
        result = inputArr[0] ;
        arg = inputArr[1];
        if (typeof arg != "number"){
            result = undefined;
        }
        else{
            result += arg;
        }
    }
    else{
      if(typeof inputArr[0] != "number"){
        return undefined;
      }
      else{
            return function waitArgument(value) {
            result = inputArr[0] ;
            arg = value;
            if (typeof arg != "number"){
                result = undefined;
            }
            else{
                result += arg;
            }
            return result
        }
      }
    
    }
    
      return result;
    }
    
    addTogether(2,3);
    