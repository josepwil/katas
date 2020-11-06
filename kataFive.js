// Kata 5 - Percent Encoded String

/*
In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.
*/

const urlEncode = function(text) {
  // initialize empty string
  let encodedString = '';
  // loop over given string 
  for (let i = 0; i < text.length; i++) {
    // determine character is not at the start or end of string and is white space 
    if (text[i] === ' ' && i !== 0 && i !== text.length - 1) {
      // in this case add %20 to encodedString
      encodedString += '%20';
    } else {
      // otherwise add existing character to encodedString
      encodedString += text[i];
    }
  }
  // trim additional white space at start/end of string and return it
  return encodedString.trim();
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));