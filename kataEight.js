// Kata 8 - Multiplication Table

/*
We will be given a number as our input data. 
This number is the highest value of our multiplication table. 
Our job is to generate a multiplication table for the values from 1 to the provided number
*/

// to do
// use maxvalue input to formulate nested array to

const multiplicationTable = function(maxValue) {
  // initializes empty table
  let table = '';
  
  for (let i = 1; i <= maxValue; i++) {
    // intializes emtpy line
    let line = '';
    
    for (let j = 1; j <= maxValue; j++) {
      // check if you need to add a space or not
      if (j !== maxValue) {
        // adds value to line
        line += j * i + ' ';
      } else {
        line += j * i;
      }
    }
      // adds line to table
      table += line + '\n';
  }

  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));