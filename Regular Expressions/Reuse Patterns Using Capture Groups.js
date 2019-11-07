let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/; 
let result = repeatNum.match(reRegex);
