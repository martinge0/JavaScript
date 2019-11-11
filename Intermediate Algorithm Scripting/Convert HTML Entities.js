function convertHTML(str) {
    let regxArr = ["&","<", ">", '"', "'" ];
    let replacerArr = ["&amp;","&lt;","&gt;","&quot;","&apos;"]
    let result = str.repeat(1);
    
    for(let i = 0; i<5; i++){
        let regex = new RegExp(regxArr[i],'g');
        if(regex.test(result)){
            result = result.replace(regex,replacerArr[i]);
        }
    }
      return result;
    }
    
    convertHTML("Dolce & Gabbana");
    