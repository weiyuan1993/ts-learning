// boolean
const isDone: boolean = false;
// number
const min = 60 as number;
// string
const nameString: string = "lala";
// Array
const idList: number[] = [1, 2, 3];
const list: Array<number> = [1, 2, 3];
list.push(5);
// list.push("5");





// object type
const sampleObject: {
  value1: number;
  value2: string;
  value3?: any;
  callBack: () => {};
} = {
}

// enum
enum PlayMode {
  // 不指定值的話預設是從 0,1,2 編號開始
  InRead = "inread",
  InPage = "instream",
  InCover = "incover"
}
var playMode: PlayMode = PlayMode.InRead;
// playMode = "inpage";
console.log(PlayMode.InRead);

//any
var notSure: any = 4;
notSure = "string";
// 懶人招
(<any>nameString) = 5;

// void
function func(): void { }

// function

function getPrice(price: number): number {
  return (price *= 8);
}
var price1 = 1;
var price2 = "2";
getPrice(price1);
// getPrice(price2);
// getPrice(price1, price2);

// 選擇性參數
function createName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  }
  return firstName;
}


// function type
type JsonReturn = {
  value: number;
  type: string;
};
function getJSON(url: string): Promise<JsonReturn> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
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
const jsonUrl = "sample.json";
// getJSON(jsonUrl).then(r => { });