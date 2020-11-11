// Kata 16 - Queen Threat Detector

/*
- Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
- Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
*/


// generateBoard

// to do
// nested loop 8 columns, 8 rows of 0's
// change 0 to 1 if matches white/black queen
// return grid

const generateBoard = function (whiteQueen, blackQueen) {
  // initialize empty board
  let board = []
  // loop over row
  for (let row = 0; row < 8; row++) {
    // initialize tempRow where we will store each role before pushing to board
    let tempRow = [];
    for (let column = 0; column < 8; column++) {
      // convert the arrays to strings in order to compare them 
      if ([row, column].toString() === whiteQueen.toString() || [row, column].toString() === blackQueen.toString()) {
        // if they match it means a queen is there so push 1
        tempRow.push(1);
      } else {
        // otherwise push 0
        tempRow.push(0);
      }
    }
    // add the row to the board
    board.push(tempRow);
  }
  // return the completed board
  return board;
}

// queenThreat
// loop through generatedBoard array
// check if queens are on the same row, or the same column or diagonal
// diagonal - trickier

const queenThreat = function (board) {
  let canAttack = false;
  // initialize empty array to store queen coordinates
  let queens = [];
  // loop over board and if queen is found push coordinates to queens array 
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      if (board[row][column] === 1) {
        queens.push(row, column);
      } 
    }
  }
  // check same row/column
  if (queens[0] === queens[2] || queens[1] === queens[3]) {
    canAttack = true;
  }
  // check diagonally
  // compare absolute value of the differences of the row and column indices
  // absolute value of queen[0](1st queen row) - queen[2](2nd queen row) === absolute value of 1st queen column - 2nd queen column
  // if they are equal they are on a diagonal line
  if (Math.abs(queens[0] - queens[2]) === Math.abs(queens[1] - queens[3])) {
    canAttack = true;
  }
  return canAttack;
}




let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
