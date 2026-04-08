// Write a function to reverse a string.

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const result = reverseString("prakash");

console.log("result::===>", result);
