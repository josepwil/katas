// Kata 6 - Repeating Numbers

/*
Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. 
If there is only one set of values then you should omit the comma.
*/

// to do
// initialize empty string
// loop over array
// for each iteration, determine value & repetition number
// add to string (for additional values add, ', ' value)

const repeatNumbers = function(data) {
  // initialize empty string
  let repeatedNumbers = '';
  // loop over each array in the list of arrays
  for (let array of data) {
    // pull out value / number of times to be repeated
    let value = array[0];
    let repetitionNumber = array[1];
    // intialize a temp string to gather string from each pass
    let temp = '';
    // create the temp string
    for (let i = 0; i < repetitionNumber; i++) {
        temp += value;
      }
      // add the temp string to the main repeatedNumbers string
      if (repeatedNumbers.length === 0) {
        // if the string is empty add it as is
        repeatedNumbers += temp;
      } else {
        // if the string already contains a value, give proper formatting
        repeatedNumbers += `, ${temp}`;
      }
        
    }
  // return the repeatedNumbers string
  return repeatedNumbers;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

