// Merge Arrays - bubble sort 

/*
Define a function called merge
The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.
*/

// to do - implement bubble sort
// create new array from given arrays
// loop over array and peform bubble sort 
// return sorted array

const merge = function (arrayOne, arrayTwo) {
  // create one long array
  let array = arrayOne.concat(arrayTwo);
  // loops for every element in the array
  for (let i = 0; i < array.length; i++) {
    // for current element bubbles it as far right as possible (inner loop stops when it can't go any futher)  
    for (let j = 0; j < array.length - 1; j++) {
      // if number is larger move it to the right
      if (array[j] > array[j + 1]) {
        // code that swaps two elements in an array
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  // return sorted array
  return array;
};

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);