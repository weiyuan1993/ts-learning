// boolean
var isDone: boolean = false;
// number
var min: number = 60;
// string
var nameString: string = "lala";
// Array
var idList: number[] = [1, 2, 3];
var list: Array<number> = [1, 2, 3];
list.push(5);
// list.push("5");

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

// void
function func(): void {}

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
