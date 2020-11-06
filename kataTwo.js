// Kata 2 - Conditional sums

/*
For this kata, we'll be adding only the numbers in the array which match the given condition.
*/

const conditionalSum = function(values, condition) {
  const evenArray = [];
  const oddArray = [];
  // loop over array and push into relevant odd/even array
  for (value of values) {
    if (value % 2 === 0) {
      evenArray.push(value);
    } else {
      oddArray.push(value);
    }
  }
  // sum initialized to 0 if there are no matches
  let sum = 0;
  if (condition === 'even') {
    let evenSum = 0;
    // loops over and sums even array
    for (num of evenArray) {
      sum += num;
    }
  } else {
    // loops over and sums odd array
    for (num of oddArray) {
      sum += num;
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// to dos
// declare emtpy odd & even array 
// iterate over over and push to odd or even array
// if condition is odd/even sum relevant array
// return summed values
// if arrays error return 0