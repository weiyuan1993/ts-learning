"use strict";
// boolean
var isDone = false;
// number
var min = 60;
// string
var nameString = "lala";
// Array
var idList = [1, 2, 3];
var list = [1, 2, 3];
list.push(5);
// list.push("5");
// object type
var sampleObject = {
    value1: 1,
    value2: "a",
    callBack: function () { }
};
// enum
var PlayMode;
(function (PlayMode) {
    // 不指定值的話預設是從 0,1,2 編號開始
    PlayMode["InRead"] = "inread";
    PlayMode["InPage"] = "instream";
    PlayMode["InCover"] = "incover";
})(PlayMode || (PlayMode = {}));
var playMode = PlayMode.InRead;
// playMode = "inpage";
console.log(PlayMode.InRead);
//any
var notSure = 4;
notSure = "string";
// 懶人招
nameString = 5;
// void
function func() { }
// function
function getPrice(price) {
    return (price *= 8);
}
var price1 = 1;
var price2 = "2";
getPrice(price1);
// getPrice(price2);
// getPrice(price1, price2);
// 選擇性參數
function createName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}
function getJSON(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
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
var jsonUrl = "sample.json";
// getJSON(jsonUrl).then(r => { });
getJSON(jsonUrl).then(function (r) { return console.log(r); });
