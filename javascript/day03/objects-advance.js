// Object.keys()

const user = {
  1: "Prakash",
  2: 26,
  3: "Delhi",
};

const usersKey = Object.keys(user);
console.log("usersKey;;;=>", usersKey);

const makeSumOfkeys = Object.keys(user).reduce((acc, value) => {
  value = Number(value);
  console.log(value);
  acc = acc + value;

  return acc;
}, 0);

console.log("makeSumOfkeys:::===>", makeSumOfkeys);

Object.keys(user).forEach((val) => {
  console.log(val, user[val]);
});
