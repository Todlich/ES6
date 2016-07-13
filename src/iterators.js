
let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

for (let xman of xmen) {
    console.log(xman);
}

let iterator = xmen[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// //value undef. done true
// console.log(iterator.next());

let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}

let randomGenerator = {
    [Symbol.iterator](){
        let count = 0;
        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 9;
                count += 1;
                return { value, done };
            }
        };
    }
};

for (let random of randomGenerator) {
    console.log(random);
}