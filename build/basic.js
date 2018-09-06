"use strict";
var x = 1;
var y = "2";
function tsPlus(a, b) {
    return a + b;
}
console.log(tsPlus(x, +y)); // 12
function getJSON() {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "sample.json");
        xhr.send();
        xhr.addEventListener("load", function () {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    var result = JSON.parse(xhr.response);
                    console.log(result);
                    resolve(result);
                }
            }
        });
    });
}
getJSON().then(function (r) { });
