// Object.keys()

const user = {
  1: "Prakash",
  2: 26,
  3: "Delhi",
};

const usersKey = Object.keys(user);

// console.log("usersKey:::=>", usersKey);

const makeSumOfkeys = Object.keys(user).reduce((acc, value) => {
  value = Number(value);
  console.log(value);
  acc = acc + value;

  return acc;
}, 0);

// console.log("makeSumOfkeys:::===>", makeSumOfkeys);

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

// console.log("TotalSalry::::====>", TotalSalry);

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

// console.log(createUser(det));

const newObj = Object.assign({}, r);
Object.seal(newObj);

newObj["4"] = "343";
newObj["0"] = "vikash";

// console.log("newObj:::===>", newObj);

const user13 = {
  name: "Rahul",
  address: {
    city: "Delhi",
  },
};

const copyUsers = { ...user13 };

const city = (copyUsers.address.city = "nawada");

// console.log("user13:::===>", user13);
// console.log(copyUsers);

let products = {
  laptop: 50000,
  phone: 20000,
  tablet: 15000,
};

const Incressedrate = Object.entries(products).map(([key, val]) => {
  return [key, val + val * 0.1];
});

products = Object.fromEntries(Incressedrate);

// console.log("newPro", products);

const users = {
  user1: { name: "Amit", age: 17 },
  user2: { name: "Rahul", age: 22 },
  user3: { name: "Neha", age: 16 },
  user4: { name: "Priya", age: 25 },
};

// console.log("users:::===>", users);

const NewU = Object.fromEntries(
  Object.entries(users)
    .filter(([key, val]) => {
      if (val.age > 19) {
        return [key, val];
      }
    })
    .map(([key, val]) => {
      val.age = val.age * 2;

      return [key, val];
    }),
);

// console.log("NewU:::==>", NewU);

const products1 = {
  apple: 50,
  mango: 120,
  banana: 30,
  orange: 200,
};

const newproducts1 = Object.fromEntries(
  Object.entries(products1)
    .filter(([_, val]) => {
      return val > 100;
    })
    .map(([key, val]) => {
      const IncVal = val * 0.2;
      return [key, val + IncVal];
    }),
);

console.log("newproducts1:::==>", newproducts1);

// using fromentri and reduce

const employees = {
  emp1: { name: "Amit", salary: 40000, active: true },
  emp2: { name: "Rahul", salary: 70000, active: false },
  emp3: { name: "Neha", salary: 90000, active: true },
  emp4: { name: "Priya", salary: 30000, active: true },
};

const newEmployess = Object.fromEntries(
  Object.entries(employees).reduce((acc, [key, val]) => {
    if (val.active) {
      const NewSal = val.salary * 0.1;
      const newArr = {
        ...val,
        salary: val.salary + NewSal,
      };

      acc.push([key, newArr]);
    }

    return acc;
  }, []),
);

console.log("newEmployess::===.", newEmployess);
