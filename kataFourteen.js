// Kata 14 - JS Object From URL Encoded String

/*
Create a function named urlDecode that will receive a URL encoded string, 
and return the a JavaScript object that represents that data.
*/

// to do 
// create object 
// loop over string replace %20 with spaces and then break into array using split
// add key value pairs to object

const urlDecode = function(text) {

// initialize emtpy output object
let output = {};

// 1. using regex replaces all (using g flag) %20 with spaces
// 2. splits string into arrays on '&' and '=' using regex ([] means both) 
let splitStringArray = text.replace(/%20/g, ' ').split(/[&=]/);

// loop over array and add to output object
// i+=2 because we want to skip over the values to get the keys
for (let i = 0; i < splitStringArray.length; i+=2) {
  output[splitStringArray[i]] = splitStringArray[i + 1]
}
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
