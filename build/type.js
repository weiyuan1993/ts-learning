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
