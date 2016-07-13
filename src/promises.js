//callback hell

// function applyForVisa(documents, resolve, reject) {
//     console.log('Обработка заявления...');
//     setTimeout(function () {
//         Math.random() > .5 ? resolve({}) : reject('В визе отказано: нехватка документов');
//     }, 2000);
// }
//
// function bookHotel() {
//
// }
//
// function buyTickets() {
//
// }
//
// applyForVisa({}, function (visa) {
//     console.info('Виза получена');
//     bookHotel(visa, function (reservation) {
//         buyTickets(reservation, function () {
//
//         }, function () {
//
//         });
//     }, function (error) {
//
//     });
// },
// function (reason) {
//     console.error(reason);
// });


//promises

function applyForVisa(documents) {
    console.log('Обработка заявления...');
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0 ? resolve({}) : reject('В визе отказано: нехватка документов');
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.info('Виза получена');
    //без объявления переменной
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(visa), 2000);
    });
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Бронируем отель');
    //используем метод объекта promise
    return Promise.resolve(visa);
}

function buyTickets(booking) {
    console.log('Покупаем билеты');
    console.log('Бронь', booking);
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error));