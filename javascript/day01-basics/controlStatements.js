let age = 20;

if (age > 18) {
  console.log("Adult");
}

// Output is: adult

let age1 = 16;

if (age1 >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// output is : Miner

let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// grade B

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}

// Monday

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// output 1,2,3

let i = 1;

while (i <= 2) {
  console.log(i);
  i++;
}

//output 1 ,2

for (let i = 0; i < 3; i++) {
  if (i === 1) {
    continue;
  }
  console.log(i);
}

//  0 ,2
