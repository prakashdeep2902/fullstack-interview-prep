const arr = [12, 4, 5, 90, 3, 4, 5];

const result = arr.reduce((acc, curr) => {
  return (sum = acc + curr);
}, 1);

const arr1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const result1 = arr1.reduce((acc, curr) => {
  const newArr = acc.concat(curr);
  return newArr;
}, []);

console.log("result1:::===>", result1);

// find number of frute repeted

const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "verma",
];

const nuOfFruteRepete = fruits.reduce((acc, fruit) => {
  if (acc[fruit]) {
    acc[fruit] = acc[fruit] + 1;
  } else {
    acc[fruit] = 1;
  }

  return acc;
}, {});

console.log("nuOfFruteRepete:::===>", nuOfFruteRepete);

const words = ["a", "b", "a", "c", "b", "a"];

const numberOfwords = words.reduce((acc, word) => {
  if (acc[word]) {
    acc[word] = acc[word] + 1;
  } else {
    acc[word] = 1;
  }

  return acc;
}, {});

console.log("numberOfwords:::===>", numberOfwords);

const users = [
  { name: "Prakash", role: "admin" },
  { name: "Rahul", role: "user" },
  { name: "Amit", role: "admin" },
  { name: "Neha", role: "user" },
];

const result2 = users.reduce((acc, user) => {}, {});
