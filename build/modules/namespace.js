"use strict";
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
