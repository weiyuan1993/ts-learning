"use strict";
// 外部模組的運用
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALUE = 0.5;
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.init = function () {
        console.log("init");
    };
    return Main;
}());
exports.Main = Main;
function ajax() {
    console.log("ajax call");
}
exports.ajax = ajax;
