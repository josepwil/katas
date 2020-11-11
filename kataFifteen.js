// Kata 15 - Square Code

/*
Create a function named squareCode that will receive a message, 
and return the secret square code version of the message.
*/

// to do
// remove spaces in message
// work out how many characters should be on each line 
  // sqrt of length of message rounded up
// loop over and add 8 to array and then new array and so on for length of string
// nested loop over and push out strings based on how many columns there are


const squareCode = function(message) {
  // remove spaces from message
  let noSpaceMessage = message.replace(/\s/g, '')
  // work out how many characters need to be on each line
  let numCharactersOnLine = Math.ceil(Math.sqrt(noSpaceMessage.length));
  // initialize an empty array where our two dimensional array will live
  let square = [];
  // loop over the noSpaceMessage string, i is iteated by the number of characters required on a line
  for (let i = 0; i < noSpaceMessage.length; i+=numCharactersOnLine) {
    // initialize empty temp array for each row which will be pushed into square array
    let temp = [];
    // iterate from j to the number of characters on a line
    for (let j = i; j < i + numCharactersOnLine; j++) {
      // check character is not undefined in case the total num characters is not perfectly divisible by the num per row
      if (noSpaceMessage[j]) {
        // add to the temp array
        temp.push(noSpaceMessage[j]);
      }
    }
    // push the completed temp array (row) to the square array
    square.push(temp);
  }
  // initialize empty output string where will store our code message 
  let output = ''

  // loop over each column
  for (let column = 0; column <  square.length + 1; column++) {
    // loop over each row 
    for (let row = 0; row < square.length; row++) {
      // check character exists 
      if (square[row][column]) {
        // for each column in the row add the character to the output
        output += square[row][column];
      }
    }
    // once we have finished a row iteration, if it is not the last one add a space
    if (column !== square.length) {
      output += ' ';
    }
  }
  // return the coded message
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));