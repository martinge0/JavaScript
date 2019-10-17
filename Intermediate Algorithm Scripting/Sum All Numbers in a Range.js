function sumAll(arr) {
  let sortArr = arr.sort((x,y) => x-y);
let result = 0;

for(let i = sortArr[0]; i <= sortArr[1]; i++){

    result += i;
}
  return result;
}

sumAll([1, 4]);
