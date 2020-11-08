// Loopy Lighthouse 2

/*
Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 3 parameters.

- range should be an array of 2 numbers representing the start and end values for the loop.
- multiples should be an array of 2 numbers representing the multiples you want to replace with words.
- words should be an array of 2 strings representing the words that will replace the multiples.
For example, say we called the function with the following arguments.
*/

const loopyLighthouse = function (range, multiples, words) {
  // where to start the loop
  let start = range[0];
  // where to end the loop
  let end = range[1] + 1;
  // loop through the range
  for (let i = start; i < end; i++) {
    // check if the for entered multiples
    if((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
      // console log entered words
      console.log(words[0].concat(words[1]));
    } else if(i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]); 
    }
    else {
      console.log(i); 
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

