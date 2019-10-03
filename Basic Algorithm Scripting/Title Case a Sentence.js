function titleCase(str) {
    str = str.toLowerCase();
  let strArray = str.split(' ');
  let updateArray = [];
  for (let i = 0; i < strArray.length; i++){
  
    updateArray[i] = strArray[i].replace(strArray[i].charAt(0), strArray[i].charAt(0).toUpperCase())
  
  }
    return updateArray.join(' ');
  }