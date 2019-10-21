function spinalCase(str) {

    let arr = str.split(/\s|_|(?=[A-Z])/);
    let result = arr.join("-").toLowerCase();
    
        return result
    }
    
    spinalCase('This Is Spinal Tap');