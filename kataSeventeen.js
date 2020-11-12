// Kata 17 - Taxicab Geometry

/*
Create a function named blocksAway that will receive an array of directions, 
and return an object that calculates how far north and east those directions will take someone.
*/


const blocksAway = function (directions) {
  // keeps track of cabs current location and direction it is facing 
  let currLocation = [0, 0];
  let currFacing = '';
  let endLocation = {}

  // catches first turn 
  if (directions[0] === 'left') {
    currFacing = 'east';
  } else if (directions[0] === 'right') {
    currFacing = 'north';
  }

  // loop over directions 
  for (let i = 0; i < directions.length; i++) {
    // if facing north
    if (currFacing === 'north') {
      // check if left or right
      if (directions[i] === 'left') {
        // update what way the cab is now facing
        currFacing = 'west';
        // update the current location coordinates
        currLocation[0] -= directions[i + 1];
        // add 1 to i to skip as we have just used i+1
        i++;
        
      } else if (directions[i] === 'right') {
        currFacing = 'east';
        currLocation[0] += directions[i + 1];
        i++;
      }
      // if facing south
    } else if (currFacing === 'south') {
        if (directions[i] === 'left') {
            currFacing = 'east';
            currLocation[0] += directions[i + 1];
            i++;
        } else if (directions[i] === 'right') {
            currFacing = 'west';
            currLocation[0] -= directions[i + 1];
            i++;
          } 
          // if facing east
    } else if (currFacing === 'east') {
      if (directions[i] === 'left') {
        currFacing = 'north';
        currLocation[1] += directions[i + 1];
        i++;
      } else if (directions[i] === 'right') {
          currFacing = 'south';
          currLocation[1] -= directions[i + 1];
          i++;        
      }
      // if facing west
    } else if (currFacing === 'west') {
      if (directions[i] === 'left') {
          currFacing = 'south';
          currLocation[1] -= directions[i + 1];
          i++;
      } else if (directions[i] === 'right') {
          currFacing = 'north';
          currLocation[1] += directions[i + 1];
          i++;        
      }
    }
  }
  // pull data from currLocation after we've looped through all directions and add to endLocation object
  endLocation.east = currLocation[0]
  endLocation.north = currLocation[1]
  // return endLocation object
  return endLocation;

}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));