const x = 1;
const y = "2";

function plus(a, b) {
  return a + b;
}

console.log(plus(x, y)); // 12

function getPrice(price) {
  return (price *= 8);
}
const price1 = 1;
const price2 = "2";
getPrice(price2);
getPrice(price1, price2);

function getJSON() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "sample.json");
    xhr.send();
    xhr.addEventListener("load", () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          const result = JSON.parse(xhr.response);
          console.log(result);
          resolve(result);
        }
      }
    });
  });
}

getJSON().then(r => {});
