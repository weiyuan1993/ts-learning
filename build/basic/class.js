"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
    Player2.prototype.pause = function () {
    };
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
var m = new MobilePlayer();
m.replay();
