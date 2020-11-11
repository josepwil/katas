// Kata 13 - Case Maker II

/*
Create a function named makeCase that will receive an input string and one or more casing options. 
Return a new string that is formatted based on casing options:
*/

const makeCase = function (input, cases) {
  // intialize output as original string received (input) before we run it through processing
  let output = input;
  // initialize case types as array
  let caseTypes = [];

  // check if only one case is entered - if so add it to caseTypes array
  if (typeof(cases) === 'string') {
    caseTypes.push(cases)
  } else {
    // if an array of cases are entered loop through them and add them to the caseTypes array
    for (let i = 0; i < cases.length; i++) {
      caseTypes.push(cases[i]);
    }
  }
  // loop through caseTypes array to check for priority 1 casing styles
  // if found apply relevant style to output
  for (caseType of caseTypes) {
    switch (caseType) {
      case 'camel':
        output = toCamel(output);
        break;
      case 'pascal':
        output = toPascal(output);
        break;
      case 'snake':
        output = toSnake(output);
        break;
      case 'kebab':
        output = toKebab(output);
        break;
      case 'title':
        output = toTitle(output);
        break;
    }
  }
  // checking/applying priority 2 casing styles
  for (caseType of caseTypes) {
    switch (caseType) {
      case 'vowel':
        output = toVowel(output);
        break;
      case 'consonant':
        output = toConsonant(output);
        break;
    }
  }
  // checking/applying prioritt 3 casing styles
  for (caseType of caseTypes) {
    switch (caseType) {
      case 'upper':
        output = toUpper(output);
        break;
      case 'lower':
        output = toLower(output);
        break;
    }
  }
  // return output string once it has passed through all processing loops
  return output;
};


// helper functions

// camel
const toCamel = function (input) {

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
}

// pascal
const toPascal = function (input) {
  let PascalCased = ''
  // upper case first letter and add it to string
  PascalCased += input[0].toUpperCase();
  // slice rest of string
  let temp = input.slice(1, input.length);
  // apply camelCase to rest of string
  temp = toCamel(temp);
  // add camelCased string onto Pascal string
  PascalCased += temp;
  // return pascal string
  return PascalCased;

}


// snake
const toSnake = function (input) {
  return input.replace(/\s/g, '_')
}

// kebab
const toKebab = function (input) {
  return input.replace(/\s/g, '-')
}

// title - capitalize first letter of every word but includes spaces
const toTitle = function (input) {
  let titleCased = '';
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      titleCased += input[i].toUpperCase();
    } else if (input[i] === ' ') {
      titleCased+= input[i];
      titleCased += input[i + 1].toUpperCase();
      i++;
    } else {
      titleCased += input[i];
    }
  }
  return titleCased;
}


// vowel - check for vowels and if so uppercase 
const toVowel = function (input) {
  let VowelCased = '';
  for (let i = 0; i < input.length; i++) {
     if (input[i].toLowerCase() ===  'a' || 
        input[i].toLowerCase() ===  'e' || 
        input[i].toLowerCase() ===  'i' || 
        input[i].toLowerCase() ===  'o' ||
        input[i].toLowerCase() ===   'u') {
          
          VowelCased += input[i].toUpperCase();
          
        } else {
          VowelCased += input[i];
        }
      }
      return VowelCased;
    }

// consonant - checks for not vowels
const toConsonant = function (input) {
  let consonantCased = '';
  for (let i = 0; i < input.length; i++) {
     if (input[i].toLowerCase() !==  'a' && 
        input[i].toLowerCase() !==  'e' && 
        input[i].toLowerCase() !==  'i' && 
        input[i].toLowerCase() !==  'o' &&
        input[i].toLowerCase() !==   'u') {
          
          consonantCased += input[i].toUpperCase();
          
        } else {
          consonantCased += input[i];
        }
      }
      return consonantCased;
    }

// upper
const toUpper = function (input) {
  return input.toUpperCase();
}

// lower
const toLower = function (input) {
  return input.toLowerCase();
}



console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));




