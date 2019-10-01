let str = ["floor" , "for"];
let charZero = [];
let charOne = [];

for (let i = 0; i< str[0].length; i++){
        charZero.push(str[0].toLowerCase().charAt(i));
}

for (let i = 0;i < str[1].length; i++ ){
    charOne.push(str[1].toLowerCase().charAt(i));
}
let charZeroSorted = charZero.sort();
let charOneSorted = charOne.sort();
let strZeroSorted = charZeroSorted.join();
let strOneSorted = charOneSorted.join();

let regex = "";
let testString = "";
if(strZeroSorted.length <= strOneSorted.length){
    regex = new RegExp(strZeroSorted);
    testString = strOneSorted;
}
else{
    regex = new RegExp(strOneSorted);
    testString = strZeroSorted;
}
let result = true;

result = regex.test(testString);

console.log(strZeroSorted);
console.log(strOneSorted);
console.log("-------------------------------");
console.log(regex)

