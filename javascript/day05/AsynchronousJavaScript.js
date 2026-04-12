// then and catch concept

fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    arr = data;
    // console.log(data);
    return data;
  })
  .catch((err) => {
    return err;
  });

// const name = "prakash";

// promish exmaple of fetching apis
function getUsers() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
}

const users = getUsers()
  .then((data) => {
    // console.log(data);
  })
  .catch((err) => err);

async function CallUserByAsyncAwait() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new error("Failed to fetch users");
    }
    const data = await res.json();
    const Arr = Object.fromEntries(
      Object.entries(data).map(([key, value]) => {
        return [key, value];
      }),
    );
    console.log(Arr);
  } catch (error) {
    console.error(error);
  }
}

CallUserByAsyncAwait();
