// Kata 18 - Number Guesser

// generates a random number and has the user input guesses in the commmand line to try and match the number

let prompt = require("prompt-sync")();

// generate random number
let answer = Math.floor(Math.random() * 100);
// track number of guesses
let numOfGuesses = 0;
// tracks guesses
let guesses = [];
// intialize emtpy guess variable 
let guess;

// loop runs whilst correct number hasn't been guessed 
while (Number(guess) !== answer) {
  // prompts user for input and assigns it to guess variable
  console.log("Guess a number:")
  guess = prompt("> ");
  // checks guess entered is a number
  if (Number.isInteger(Number(guess))) {
    // checks number hasn't already been guessed
    if (guesses.includes(guess) === false) {
      // adds number to guesses array of previously guessed numbers
      guesses.push(guess);
      // updates number of guesses 
      numOfGuesses++;
      // checks if guess is too high
      if (Number(guess) > answer) {
        console.log('Too High!')
        // or too low
      } else if (Number(guess) < answer) {
        console.log('Too Low!')
      }
    } else {
      // if already guessed
      console.log('Already Guessed!')
    }

  } else {
    // if not a number
    console.log('Not a number! Try again!')
  }

}
// if we get to here the while loop has broken and we return the number of guesses it took
console.log(`You got it! You took ${numOfGuesses} attempts!`)





