// Kata 3 - Vowels

/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.
*/

const numberOfVowels = function(data) {
  let counter = 0;
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        counter++;
        break;
    }
  }
  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"))

// to do
// loop over string
// if character is a vowel, increment counter
// return counter