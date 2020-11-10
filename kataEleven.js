// Kata 11 - Change Calculator

/*
Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. 
Return a new object that describes the total amount of change for the cashier to give back. 
Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.
*/


const calculateChange = function(total, cash) {

  // intialize the coins and assign their value
  const twentyDollars = 2000;
  const tenDollars = 1000;
  const fiveDollars = 500;
  const twoDollars = 200;
  const oneDollar = 100;
  const quarter = 25;
  const dime = 10;
  const nickel = 5;
  const penny = 1;

  // works out the change left to give 
  let changeToGive = cash - total;

  // initialize an empty object to add into
  let output = {};

  // while we still have change left to give
  while (changeToGive > 0) {
    // check if we can give a 20 (2000)
    if (twentyDollars <= changeToGive) {
      // if we can give - check if key already exists in output object
      if (output.twentyDollars) {
        // if key exists increment the value by 1
        output.twentyDollars++;
      } else {
        // if key doesnt exist initialize key in object and set its value to 1
        output.twentyDollars = 1;
      }
      // update how much change we have left to give
      changeToGive -= twentyDollars;
    
    } else if (tenDollars <= changeToGive) {
      if (output.tenDollars) {
        output.tenDollars++;
      } else {
        output.tenDollars = 1;
      }
      changeToGive -= tenDollars;
    
    } else if (fiveDollars <= changeToGive) {
      if (output.fiveDollars) {
        output.fiveDollars++;
      } else {
        output.fiveDollars = 1;
      }
      changeToGive -= fiveDollars;
    
    } else if (twoDollars <= changeToGive) {
      if (output.twoDollars) {
        output.twoDollars++;
      } else {
        output.twoDollars = 1;
      }
      changeToGive -= twoDollars;
    
    } else if (oneDollar <= changeToGive) {
      if (output.oneDollar) {
        output.oneDollar++;
      } else {
        output.oneDollar = 1;
      }
      changeToGive -= oneDollar;

    } else if (quarter <= changeToGive) {
      if (output.quarter) {
        output.quarter++;
      } else {
        output.quarter = 1;
      }
      changeToGive -= quarter;
    
    } else if (dime <= changeToGive) {
      if (output.dime) {
        output.dime++;
      } else {
        output.dime = 1;
      }
      changeToGive -= dime;
    
    } else if (nickel <= changeToGive) {
      if (output.nickel) {
        output.nickel++;
      } else {
        output.nickel = 1
      }
      changeToGive -= nickel;
    
    } else {
      if (output.penny) {
        output.penny++;
      } else {
        output.penny = 1;
      }
      changeToGive -= penny;
    }
  }
  // return out output object after while loop has completed 
  return output;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

