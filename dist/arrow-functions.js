'use strict';

var add = function add(x, y) {
    return x + y;
};

var square = function square(x) {
    return x * x;
};

var giveMeAnswer = function giveMeAnswer() {
    return 42;
};

var logm = function logm() {
    return console.log('Message');
};

var multiplay = function multiplay(x, y) {
    var result = x * y;
    return result;
};

//литерал объекта заворачиваем в ()
var getPerson = function getPerson() {
    return { name: 'Jhon' };
};

(function () {
    return console.log('IIFE');
})();

//массивы
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;

numbers.forEach(function (num) {
    return sum += num;
});

var squared = numbers.map(function (n) {
    return n * n;
});

//объекты
var person = {
    name: 'Jhon',
    greet: function greet() {
        var _this = this;

        setTimeout(function () {
            console.log('Hello ' + _this.name);
            console.log(_this);
        }, 2000);
    }
};

// console.log(add(2, 5));
// console.log(square(2));
// console.log(giveMeAnswer());
// logm();
// console.log(multiplay(2, 5));
// console.log(getPerson());
// console.log(sum);
// console.log(squared);

person.greet();