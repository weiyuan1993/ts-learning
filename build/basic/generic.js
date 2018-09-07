"use strict";
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
var myAdultGameStore = {
    games: [],
    addGame: function (game) {
        this.games.push(game);
    },
    getAll: function () {
        return this.games;
    }
};
