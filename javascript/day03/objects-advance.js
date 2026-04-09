// Object.keys()

const user = {
  1: "Prakash",
  2: 26,
  3: "Delhi",
};

const usersKey = Object.keys(user);
console.log("usersKey:::=>", usersKey);

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

// object Values::

const salaries = {
  john: 30000,
  sara: 40000,
  peter: 50000,
};

const TotalSalry = Object.values(salaries).reduce((acc, val) => {
  return (acc += val);
}, 0);

console.log("TotalSalry::::====>", TotalSalry);

// object.entries

const salaries1 = {
  john: 30000,
  sara: 40000,
  peter: 50000,
};

const r = Object.entries(salaries).map(([key, value], index) => {
  console.log(index);
  return [key, value * 2];
});

console.log({ ...r });

//4. Spread Operator ...

const user12 = {
  name: "Prakash",
  age: 26,
};

const newUser = {
  ...user12,
  city: "Delhi",
};

console.log(newUser);

//

const defaultSettings = {
  theme: "light",
  notifications: true,
};

const userSettings = {
  theme: "dark",
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);

// Rest Operator ...

const createUser = ({ password, age, ...rest }) => {
  return rest;
};

const det = {
  name: "prakash deep sarma",
  age: 28,
  email: "prakashdeep@gmail.com",
  password: "prakashdeep",
  work: "SDE1",
};

console.log(createUser(det));

const newObj = Object.assign({}, r);
Object.seal(newObj);

newObj["4"] = "343";
newObj["0"] = "vikash";

console.log("newObj:::===>", newObj);
