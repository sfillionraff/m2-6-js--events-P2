// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 },
];

const archieComicArray = [
  {name: "Betty", age: 17},
  {name: "Jughead", age: 17},
  {name: "Archie", age: 18},
  {name: "Veronica", age: 16}
];
//-------------------------------------------------

// Exercise 2
// ------------
//
// 1. Write a function accepts an array and returns
// the average age of the `people` in that array (rounded to the nearest unit.)
// Use Math.round()

function avgAge(arr) {
  for (var key in arr) {
    let total = 0;
    if (arr[key].hasOwnProperty('age')) {
      total += arr[key].age;
      return total;
    }
  }
  // let ageAverage = Math.round(total/arr.length);
  // return ageAverage;
}
console.log(avgAge(people));

// 2. Do a console.log to verify your function.

// 3. Run the test to validate: yarn test exercise-2

module.exports = { avgAge, people };
