var x: number = 1;
var y: string = "3";
function tsPlus(a: number, b: number): number {
  return a + b;
}

console.log(tsPlus(x, +y)); // 12

type JsonReturn = {
  value: number;
  type: string;
};
function getJSON(): Promise<JsonReturn> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "sample.json");
    xhr.send();
    xhr.addEventListener("load", () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          const result: JsonReturn = JSON.parse(xhr.response);
          console.log(result);
          resolve(result);
        }
      }
    });
  });
}

getJSON().then(r => {});
