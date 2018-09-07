"use strict";
// basic type
var x = 1;
var y = "2";
function tsPlus(a, b) {
    return a + b;
}
console.log(tsPlus(x, y)); //13
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    // 建構式
    function Player(_playMode, _playerType) {
        this.playMode = _playMode;
        this.playerType = _playerType;
    }
    // static function
    Player.isSupportHTML5 = function () {
        return true;
    };
    Player.prototype.play = function () { };
    Player.prototype.pause = function () { };
    Player.prototype.replay = function () { };
    return Player;
}());
var myPlayer = new Player("inread", "DF");
var Player2 = /** @class */ (function () {
    function Player2(playerParam) {
        this.playMode = playerParam.playMode;
        this.playerType = playerParam.playerType;
    }
    // static function
    Player2.getPlayerState = function () { };
    Player2.prototype.play = function () { };
    return Player2;
}());
var MobilePlayer = /** @class */ (function (_super) {
    __extends(MobilePlayer, _super);
    function MobilePlayer() {
        var _this = _super.call(this, "mobile-inread", "INSTANT") || this;
        _this.duration = 30;
        _this.setBanner();
        return _this;
    }
    MobilePlayer.prototype.setBanner = function () {
        this.banner = new Image();
    };
    return MobilePlayer;
}(Player));
// 泛型 Generic 讓函式的 type 更彈性
function logAndReturn(thing) {
    console.log(thing);
    return thing;
}
var stringLog = logAndReturn("string log");
var numberLog = logAndReturn(500);
var myPhone = { vendor: "Apple", number: 0987654321 };
var logMyPhone = logAndReturn(myPhone);
var myChildGameStore = {
    games: [],
    addGame: function (game) {
        this.games.push(game);
    },
    getAll: function () {
        return this.games;
    }
};
var allGames = myChildGameStore.getAll();
var myAdultGame = {};
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
var sampleObject = {};
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
// window 沒有的物件
window.ONEAD = nameString;
// ambient declaration 周圍環境宣告 已存在 window 裡的 第三方 lib
// 可透過 npm install @types/jquery --save-dev 安裝
$("#ONEAD");
jQuery("Guoshi");
// 內部模組的運用，模組內是相近的功能
var Guoshi;
(function (Guoshi) {
    var internalConst = {};
    Guoshi.VALUE = 0.5;
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.prototype.init = function () {
            console.log("init");
        };
        return Main;
    }());
    Guoshi.Main = Main;
})(Guoshi || (Guoshi = {}));
/// <reference path="./namespace.ts" />
var main = new Guoshi.Main();
var Guoshi;
(function (Guoshi) {
    var main = new Guoshi.Main();
    main.init();
})(Guoshi || (Guoshi = {}));
