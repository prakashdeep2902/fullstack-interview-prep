// // // then and catch concept

// // fetch("https://jsonplaceholder.typicode.com/users")
// //   .then((result) => {
// //     return result.json();
// //   })
// //   .then((data) => {
// //     arr = data;
// //     // console.log(data);
// //     return data;
// //   })
// //   .catch((err) => {
// //     return err;
// //   });

// // // const name = "prakash";

// // // promish exmaple of fetching apis
// // function getUsers() {
// //   return new Promise((resolve, reject) => {
// //     fetch("https://jsonplaceholder.typicode.com/users")
// //       .then((res) => res.json())
// //       .then(resolve)
// //       .catch(reject);
// //   });
// // }

// // const users = getUsers()
// //   .then((data) => {
// //     // console.log(data);
// //   })
// //   .catch((err) => err);

// // async function CallUserByAsyncAwait() {
// //   try {
// //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
// //     if (!res.ok) {
// //       throw new error("Failed to fetch users");
// //     }
// //     const data = await res.json();
// //     const Arr = Object.fromEntries(
// //       Object.entries(data).map(([key, value]) => {
// //         return [key, value];
// //       }),
// //     );
// //     console.log(Arr);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// // CallUserByAsyncAwait();

// // Promise.resolve()
// //   .then(() => {
// //     console.log("1");
// //   })
// //   .then(() => {
// //     console.log("2");
// //   });

// // Promise.resolve()
// //   .then(() => {
// //     console.log("1");
// //   })
// //   .then(() => {
// //     console.log("2");
// //   });

// // Promise.resolve().then(() => {
// //   console.log("3");
// // });

// // console.log("4");

// // console.log("Start");

// // setTimeout(() => {
// //   console.log("Timeout 1");
// // }, 0);

// // setTimeout(() => {
// //   console.log("Timeout 2");
// // }, 0);

// // Promise.resolve().then(() => {
// //   console.log("Promise 1");
// // });

// // console.log("End");

// console.log("1");

// setTimeout(() => {
//   console.log("2");

//   Promise.resolve().then(() => {
//     console.log("3");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("4");

//   setTimeout(() => {
//     console.log("5");
//   }, 0);
// });

// console.log("6");

// // qustion 3

// console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve().then(() => {
//   console.log("3");
// });

// Promise.resolve().then(() => {
//   console.log("4");
// });

// console.log("5");

// // Question 4 (Nested Promise)

// console.log("Start");

// Promise.resolve().then(() => {
//   console.log("P1");

//   Promise.resolve().then(() => {
//     console.log("P2");
//   });
// });

// setTimeout(() => {
//   console.log("T1");
// }, 0);

// console.log("End");

// // Question 5 (Very Important)

// console.log("A");

// setTimeout(() => {
//   console.log("B");

//   Promise.resolve().then(() => {
//     console.log("C");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("D");
// });

// console.log("E");

// // Question 6 (Chain Confusion)

// Promise.resolve()
//   .then(() => {
//     console.log("1");
//   })
//   .then(() => {
//     console.log("2");
//   });

// Promise.resolve().then(() => {
//   console.log("3");
// });

// console.log("4");

// // Question 7 (Mixed Queue)

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });

// console.log("End");

// // Question 8 (Hard)

// console.log("1");

// setTimeout(() => {
//   console.log("2");

//   Promise.resolve().then(() => {
//     console.log("3");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("4");

//   setTimeout(() => {
//     console.log("5");
//   }, 0);
// });

// console.log("6");

// Promish ALL and Promish setteled

const urls = [
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums12321",
  "https://jsonplaceholder.typicode.com/photos",
  "https://jsonplaceholder.typicode.com/todos3",
];

async function fetchAllData() {
  try {
    const res = await Promise.allSettled(
      urls.map(async (url) => {
        const res = await fetch(url);
        return await res.json();
      }),
    );

    const valueOfRes = res.map((val) => {
      return val.value;
    });

    // console.log("valueOfRes:::===>", valueOfRes);
  } catch (error) {}
}

fetchAllData();
