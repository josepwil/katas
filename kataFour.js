// Kata 4 - Instructors Names

/*
In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.
*/

const instructorWithLongestName = function(instructors) {
  const longestName = {name: "", course: ""};
  for (instructor of instructors) {
    if (instructor.name.length > longestName.name.length) {
      longestName.name = instructor.name;
      longestName.course = instructor.course;
    }
  }
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

// to do
// set empty object
// loop over objects
// set longest name object
