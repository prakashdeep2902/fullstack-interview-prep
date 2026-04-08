// creating a array ;
const arr2 = new Array();

console.log("arr2:::===>", arr2);

const arr = [12, 4, 5, 90, 3, 4, 5];

// Common Array Methods

const arr3 = new Array(24, 35, 3, 4, 5);

arr3.push(44);

console.log(arr3);

const popArry = arr3.pop();

console.log("newArry:::===>", popArry);

const shiftNew = arr3.shift();

console.log("shiftNew::===>", shiftNew);
console.log("arr:::==>", arr3);

const unsiftNew = arr3.unshift(0);

console.log("unsiftNew::===>", unsiftNew);
console.log("arr:::==>", arr3);

// for each

let users1 = [
  { name: "Rahul", age: 25 },
  { name: "Aman", age: 30 },
];

const retusers = users1.forEach((user) => {
  return user.age + 5;
});

console.log("retusers:::===>", retusers);

// map

const MapUsers = [
  { name: "prakash", age: 17, city: "Nawada" },
  { name: "akash", age: 26, city: "Nawada" },
  { name: "vikash", age: 12, city: "Nawada" },
  { name: "reema", age: 45, city: "Nawada" },
];

const newMapArr = MapUsers.map((user, index) => {
  return {
    userName: user.name.toUpperCase(),
    userAge: user.age + 5,
    userCity: (() => {
      if (user.age >= 20 && user.age <= 30) {
        return "Patna";
      } else {
        return "eknar";
      }
    })(),
    index: `at index ${index}`,
    canVote:
      user.age >= 18
        ? `${user.name} is eligible to vote`
        : `${user.name} is eligible to vote`,
  };
});

console.log("newMapArr:::===>", newMapArr);

// map 2nd proble

const orders = [
  { id: 1, product: { name: "Laptop", price: 50000 } },
  { id: 2, product: { name: "Phone", price: 20000 } },
  { id: 3, product: { name: "Tablet", price: 30000 } },
];

const NewOrder = orders.map((pro, index) => {
  return {
    ProductName: pro.product.name,
    ProductIndex: index,
  };
});

console.log("NewOrder:::===>", NewOrder);

// map 3rd Problem

const users12 = [12, 14, 15];

const newUsers12 = users12.map((user) => ({
  UserType: typeof user,
  userName:
    typeof user === "number"
      ? Math.random().toString(36).substring(2, 7)
      : "prakash",
  userAge: user,
  userCity: "Nawada",
}));

console.log("newUsers12::::===>", newUsers12);

// map 4th problem

const products1 = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 30000 },
];

const newproducts1 = products1.map((user, index) => {
  return `${user.name} cost ₹${user.price}`;
});

console.log("newproducts1:::===>", newproducts1);

// filter

let num = [1, 2, 3, 4];

let even = num.filter((num) => num % 2 === 0);

console.log("even===>", even);

console.log("num::::===>", num);

let users32 = [
  { name: "Rahul", active: true },
  { name: "Aman", active: false },
  { name: "Priya", active: true },
];

let activeUsers = users32.filter((user, index) => {
  return user.active;
});

let mapActice = users32.map((user, index) => {
  return user.active;
});

console.log("mapActice:::====>", mapActice);

console.log("activeUsers::==>", activeUsers);

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

// console.log("numberOfwords:::===>", numberOfwords);

const users = [
  { name: "Prakash", role: "admin" },
  { name: "Rahul", role: "user" },
  { name: "Amit", role: "admin" },
  { name: "Neha", role: "user" },
];

const result2 = users.reduce((acc, user) => {}, {});

const collection = [
  {
    id: 1,
    des: "collection of fruits",
    fruits: ["apple", "banana", "apple", "orange", "banana", "apple", "verma"],
  },

  {
    id: 2,
    des: "collection of books",
    books: ["love affect", "dopamine detox", "atomic habit", "half girlfriend"],
  },
];

const books = collection.filter((col) => col.books).map((col) => col.books);

// console.log("books:::===>", books);

let users343 = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Aman" },
];

let users3432 = users343.find((u) => u.id === 2);

// console.log(users3432);

const Eorders = [
  {
    userId: 1,
    status: "completed",
    items: [
      { name: "Laptop", price: 800 },
      { name: "Mouse", price: 20 },
    ],
  },
  {
    userId: 2,
    status: "pending",
    items: [{ name: "Keyboard", price: 50 }],
  },
  {
    userId: 1,
    status: "completed",
    items: [{ name: "Monitor", price: 200 }],
  },
  {
    userId: 3,
    status: "completed",
    items: [
      { name: "Headphones", price: 100 },
      { name: "Mousepad", price: 10 },
    ],
  },
];

const completedOrders = Eorders.filter((or) => {
  return or.status == "completed";
})
  .map((com) => {
    return {
      id: com.userId,
      items: com.items,
    };
  })
  .reduce((acc, curr) => {
    let count = 1;
    const TotalPrice = curr.items.reduce((sum, item) => {
      return (sum = sum + item.price);
    }, 0);

    // console.log("TotalPrice::==>", TotalPrice);

    if (acc[curr.id]) {
      acc[curr.id] = acc[curr.id] + TotalPrice;
    } else {
      acc[curr.id] = TotalPrice;
    }

    return acc;
  }, {});

// console.log("completedOrders::===>", completedOrders);

const students = [
  {
    name: "Aman",
    scores: [80, 70, 60],
  },
  {
    name: "Riya",
    scores: [90, 95, 92],
  },
  {
    name: "Rahul",
    scores: [40, 50, 45],
  },
  {
    name: "Sneha",
    scores: [85, 87, 90],
  },
];

const avrageScoreOfTopStudents = students
  .map((stu, index) => {
    const sumOfScores = stu.scores.reduce((sum, currValue) => {
      sum = sum + currValue;

      return sum;
    }, 0);

    const AvgOfScores = sumOfScores / stu.scores.length;

    return {
      name: stu.name,
      avgScore: Number(AvgOfScores.toFixed(0)),
    };
  })
  .filter((stu) => {
    return stu.avgScore > 80;
  })
  .reduce(
    (acc, curr) => {
      acc.students.push(curr.name);
      acc.totalAverage += curr.avgScore;
      return acc;
    },
    { students: [], totalAverage: 0 },
  );

console.log("avrageScoreOfTopStudents:::===>", avrageScoreOfTopStudents);
