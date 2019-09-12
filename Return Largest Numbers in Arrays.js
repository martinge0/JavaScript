<<<<<<< HEAD
function largestOfFour(arr) {
    let maxValues = [];
for (let i=0; i<4; i++){
      maxValues.push(Math.max(...arr[i]))
    }
    let indexOfMaxValue = maxValues.indexOf(Math.max(...maxValues));
    return arr[indexOfMaxValue];
  }

=======
function largestOfFour(arr) {
    let maxValues = [];
for (let i=0; i<4; i++){
      maxValues.push(Math.max(...arr[i]))
    }
    let indexOfMaxValue = maxValues.indexOf(Math.max(...maxValues));
    return arr[indexOfMaxValue];
  }

>>>>>>> 9658c6d56d301d877570fef61f6aff448a44522b
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));