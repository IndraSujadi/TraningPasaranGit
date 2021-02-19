"use strict";
// C1 rest & spread operator
/*
let stuff = new Set();

stuff.add(3);
stuff.add(6);
stuff.add(9);

let [first, ...others] = stuff;

console.log(first);
console.log(others); */
exports.__esModule = true;
// C2 callback & Emitter
var events_1 = require("events");
var emitter = new events_1.EventEmitter();

// let events = require('events');
// let emitter = new events.EventEmitter();
emitter.addListener('user_login', function () {
    console.log('hi, user');
});
emitter.addListener('user_login', function () {
    console.log('How are you ?');
});

emitter.emit('user_login');
