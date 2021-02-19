// C1 rest & spread operator
/*
let stuff = new Set();

stuff.add(3);
stuff.add(6);
stuff.add(9);

let [first, ...others] = stuff;

console.log(first);
console.log(others); */

// C2 callback & Emitter
import {EventEmitter} from 'events'; 
let emitter = new EventEmitter();

// let events = require('events');
// let emitter = new events.EventEmitter();

emitter.addListener('user_login', () => {
    console.log('hi, user');
});

emitter.addListener('user_login', () => {
    console.log('How are you ?');
});

emitter.emit('user_login');


