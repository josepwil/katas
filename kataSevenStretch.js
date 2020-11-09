// Kata 7 - Case Maker

/*
We will receive a normal string of words separated with spaces as the input. 
Our job is to convert these strings into camel cased strings.
*/

// to do
// loop over string until you find white space
// remove white space 
// uppercase the next ith character
// return string

const camelCase = function(input) {
  // initialize emtpy string
  let camelCased = '';
  // loop over input string
  for (let i = 0; i < input.length; i++) {
    // check if ith character is not a space
    if (input[i] !== ' ') {
      // if not a space add it to camelCased string
      camelCased += input[i];
    } else if (input[i] === ' ') {
      // if a space, uppercase the next character
      let nextCharacter = input[i + 1].toUpperCase();
      // add the next character to camelCased string
      camelCased += nextCharacter;
      // because character is already added increment i by 1 so that it is skipped on next iteration of the loop
      i++;
    }
  }
  return camelCased;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
