// Kata 6 - SmartParking

/*
We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. 
Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.
*/

// uppcase means available lowcase means unavailable

// to do
// nested loop over spots arrays
// check for relevant uppercase letter spots
// if they find one return it [x, y] otherwise return false

const whereCanIPark = function (spots, vehicle) {
  // loop over rows
  for (let y = 0; y < spots.length; y++) {
    // loop over columns
    for (let x = 0; x < spots[y].length; x++) {
      if (vehicle === 'regular') {
        if (spots[y][x] === 'R') {
          // if a match is found return coordinates
          return [x, y];
        }
      } else if (vehicle === 'small') {
          if (spots[y][x] === 'R' || spots[y][x] === 'S') {
            // if a match is found return coordinates
            return [x, y];
          }
      } else if (vehicle === 'motorcycle') {
        if (spots[y][x] === 'R' || spots[y][x] === 'S' || spots[y][x] === 'M') {
          // if a match is found return coordinates
          return [x, y];
        }
      }
    }
  }
  // if not match is found return false  
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))