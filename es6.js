// ecmaScript 6  2015

// spread operator   shallow coppy
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr2);

const obj = {
  name: "Mohammed",
  age: 34,
};
const obj2 = {
  ...obj,
  email: "haddadmoha55.com",
};
console.log(obj);
console.log(obj2);

// Array methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "2", "5", "7"];
// const nreduce =numbear.reduce((acc,curr)=>acc+curr,o)
// console.log(reduce)

// callback function
function getAllNumbears(numbears) {
  numbears = numbears.filter((n) => typeof n === "number");
  return calcAllsum(numbears);
}
function calcAllsum(n) {
  return n.reduce((acc, curr) => acc + curr, 0);
}
console.log(getAllNumbears(numbers));
// filter
const fruits = ["banana", "orange", "potato", "apple"];
const filteredfruits = fruits.filter((fruit) => fruit !== "potato");
console.log(filteredfruits);

// map
const numbers1 =[1,2,3,4,5];
const mappedNumbers = numbers1.map((number)=>number / 2);
console.log(mappedNumbers);

// find =>find the first element that mathches the condition
const numbers2 =[1,2,3,4,5];
const foundNumber = numbers2.find((number)=>number>3);
console.log(foundNumber)

// findInex => find the index of frist occurence in the array
const numbers3 = [1,2,3,4,5];
const foundIndex = numbers3.findIndex((number)=>number >2);
console.log(foundIndex)