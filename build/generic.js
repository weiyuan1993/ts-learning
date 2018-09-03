"use strict";
function logAndReturn(thing) {
    console.log(thing);
    return thing;
}
var stringLog = logAndReturn("string log");
var numberLog = logAndReturn(500);
