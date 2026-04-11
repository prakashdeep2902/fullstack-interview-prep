const search = document.querySelector("#search");

function searchData(event) {
  console.log("Searching:", event.target.value);
}

function debounce(fun, waitTime) {
  let count = 0;
  let timeId;
  return function (...arg) {
    clearTimeout(timeId);
    timeId = setTimeout(() => fun.apply(this, arg), waitTime);
    count += 1;
    console.log(`timeId${count}::${timeId}`);
  };
}

function throttle(func, limit) {
  let callTime = 0;
  return function (...arg) {
    let now = new Date();

    if (now - callTime >= limit) {
      console.log("now::===>", now);
      console.log("callTImeL", callTime);
      console.log("both Minus::==", now - callTime);
      callTime = now;
      func.apply(this, arg);
    }
  };
}
const SearchDataWithDebounce = debounce(searchData, 500);

const SearchDataWithThrottling = throttle(searchData, 500);

search.addEventListener("input", SearchDataWithThrottling);
