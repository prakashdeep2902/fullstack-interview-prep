// create object using new objects

const person = new Object();

person.name = "prakash";
person.age = 20;
person.work = "SDE1";

// console.log(person);

// Method 3 — Using Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new Person("Prakash", 28);
const user2 = new Person("Rahul", 25);

// console.log(user1);
// console.log(user2);

const user = {
  name: "Prakash",
  age: 28,
};

const key = "age";

// console.log(user[key]);

// accessing the key array

const nameIs = {
  name: "Prakash",
  address: {
    city: "Delhi",
    country: "India",
  },
};

let key1 = "address.city";

// console.log("address::::::::===>", nameIs[key1]);

// Method in object

const user12 = {
  name: "vikash",
  age: 25,
  address: {
    City: "nawada",
    Village: "Eknar",
    Pincode: "805128",
  },
  FullAddress: function () {
    console.log(
      `${this.address.City}-${this.address.Village}-${this.address.Pincode}`,
    );
    return `${this.name}--${this.address.City}-${this.address.Village}-${this.address.Pincode}`;
  },
};

console.log(user12.FullAddress());

const obj = {
  x: 10,
  get() {
    console.log(`this.x:::: ${this.x}`);
    return this.x;
  },
};

console.log(obj.get());
