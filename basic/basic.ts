var x: number = 1;
var y: string = "2";
function tsPlus(a: number, b: number): number {
  return a + b;
}

console.log(tsPlus(x, +y)); // 12
