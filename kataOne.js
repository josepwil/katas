// Kata 1 - Sum the Largest Numbers

/*
In this exercise, we will be given an array of 2 or more numbers.
We will then have to find the two largest numbers in that array, and sum them together.
*/

const sumLargestNumbers = function(data) {
  let largest = 0;
  let secondLargest = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i] > largest) {
      largest = data[i];
    }
  }
  /* 
  for (i = 0; i < data.length; i++) {
    if (data[i] === largest) {
      data.splice(i, 1);
    }
  }
  */
  for (i = 0; i < data.length; i++) {
    if (data[i] > secondLargest && data[i] !== largest) {
      secondLargest = data[i];
    }
  }
  return largest + secondLargest;

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// iterate over array
// find largest number 
// remove largest number from array
// iterate over again
// find new largest number
// return sum of those two numbers