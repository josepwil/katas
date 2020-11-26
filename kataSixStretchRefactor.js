const repeatNumbers = function(data) {
  let outputNums = "";
  for (let array of data) {
    let tempOutput = "";
    for (let i = 0; i < array[1]; i++) {
      tempOutput += array[0];
    }
    if (outputNums) {
      outputNums += ', ' + tempOutput;
    } else {
      outputNums += tempOutput;
    }
  }
  return outputNums;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));