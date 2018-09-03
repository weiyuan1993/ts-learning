var x = 1;
var y = "2";
function plus(a, b) {
  return a + b;
}

console.log(plus(x, y)); // 12

function getPrice(price) {
  return (price *= 8);
}
var price1 = 1;
var price2 = "2";
getPrice(price2);
getPrice(price1, price2);
