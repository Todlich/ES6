let user = {
    username: 'r2d2',
    [Symbol.for('password')]: 'c3po'
};

console.log(Object.getOwnPropertySymbols(user));