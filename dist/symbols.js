'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var user = _defineProperty({
    username: 'r2d2'
}, Symbol.for('password'), 'c3po');

console.log(Object.getOwnPropertySymbols(user));