// Kata 12 - Organizing Instructors

/*
Create a function named organizeInstructors that will receive an array of instructor objects, 
and will return a new object that has the following format:
{
  CourseName: [instructors]
} 
*/

// to do
// loop over instructors 
// check if course exists in ouput:
// if not exist add to object as key and add array with name as value;
// if exist push name to value array
// return output

const organizeInstructors = function(instructors) {
  // intialize empty output object
  let output = {};

  // loop over each instructor object in the array 
  for (instructor of instructors) {

    // pull name and course from the object
    let instructorName = instructor["name"];
    let instructorCourse = instructor["course"];

    // using the 'in' keyword check if the course exists as a key in the ouput object
    if (instructorCourse in output) {
      // if it already exists add instructors name to the array of values
      output[instructorCourse].push(instructorName);
    } else {
      // otherwise initialize it and set its value to an array with the first element being the instructors name
      // [] after output means the variable is evaluated and that result is used to access the key rather than looking for a key named instructorCourse
      output[instructorCourse] = [instructorName];
    }
  }
  return output;

};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));