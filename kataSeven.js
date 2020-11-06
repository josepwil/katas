// Kata 7 - In the Air Tonight

/*
For this challenge we will implement a function called checkAir(), which will check a collection of air samples. 
The function will take in two arguments. 
The first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. 
The second argument is a number representing the highest acceptable amount of dirty samples. 
For example, a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to be considered clean. 
Our function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.
*/

// to do
// loop over sample, keep track of number of dirty samples
// work out acceptable level based on threshold/number of samples (i.e. length of samples array)
// if dirty samples > acceptable level return polluted otherwise return clean

const checkAir = function (samples, threshold) {
  // keep track of number of dirty samples
  let dirtySamples = 0;
  for (sample of samples) {
    if (sample === 'dirty') {
      dirtySamples++;
    }
  }
  // check if percent of dirtySamples is more than the threshold
  if (dirtySamples / samples.length > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))