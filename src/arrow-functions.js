
let add = (x, y) => x + y;

let square = x => x * x;

let giveMeAnswer = () => 42;

let logm = () => console.log('Message');

let multiplay = (x, y) => {
    let result = x * y;
    return result;
}

//литерал объекта заворачиваем в ()
let getPerson = () => ({name: 'Jhon'});

(() => console.log('IIFE'))();

//массивы
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

numbers.forEach(num => sum += num);

let squared = numbers.map(n => n * n);

//объекты
let person = {
    name: 'Jhon',
    greet: function() {
        setTimeout(() => {
            console.log('Hello ' + this.name);
            console.log(this);
        }, 2000);
    }
}

// console.log(add(2, 5));
// console.log(square(2));
// console.log(giveMeAnswer());
// logm();
// console.log(multiplay(2, 5));
// console.log(getPerson());
// console.log(sum);
// console.log(squared);

person.greet();

