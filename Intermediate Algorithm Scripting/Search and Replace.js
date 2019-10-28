function myReplace(str, before, after) {
    function wordToUper(word1,word2) {
       let result = "";
       if(/^[A-Z]/.test( word1) == true){
           result = word2[0].toUpperCase() + word2.substr(1);
       }
       else{
           result = word2;
       }
       return result;
   }
   
   
   let result = "";
   let strArr = str.split(" ");
   let newWord = "";
   for (let i = 0; i < strArr.length; i++){
       if(strArr[i] == before){
           newWord = wordToUper(strArr[i],after);
           strArr[i] = newWord;
           break;
       }
   }
   result = strArr.join(" ");
     return result;
   }
   
   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
   