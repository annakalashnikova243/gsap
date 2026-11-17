let screenPrice = 1000;
let partnerPercent = 10;

// 1. Объявление всех функций

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const getAllServicePrices = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let serviceName = prompt('Какой дополнительный сервис нужен?');
        if (serviceName) {
            allServiceNames += (allServiceNames ? ', ' : '') + serviceName;
        }

        let servicePrice;
        do {
            servicePrice = prompt('Сколько это будет стоить?');
        } while (!isNumber(servicePrice));

        sum += +servicePrice;
    }
    return sum;
};

function getFullPrice() {
    return screenPrice + allServicePrices;
}

function getTitle(title) {
    if (!title) return '';
    let firstLetter = title.charAt(0).toUpperCase();
    let restLetters = title.slice(1).toLowerCase();
    return firstLetter + restLetters;
}

function getServicePercentPrice() {
    return Math.round(fullPrice - (fullPrice * partnerPercent) / 100);
}

function getRollbackMessage(price) {
    let discountAmount = 0;

    if (price < 0) {
        console.log('Что-то пошло не так');
    } else if (price === 0) {
        console.log('Цена равна 0 — услуга бесплатна или не задана');
    } else if (price === 50000 || price === 20000) {
        console.log('Стандартная цена!');
    } else if (price > 50000) {
        console.log('Даем скидку в 10%');
        discountAmount = (price * 10) / 100;
    } else if (price > 20000 && price < 50000) {
        console.log('Даем скидку в 5%');
        discountAmount = (price * 5) / 100;
    } else if (price < 20000 && price > 0) {
        console.log('Скидка не предусмотрена');
    }

    return discountAmount;
}

// 2. Сбор данных от пользователя и вызов функций

let titleProject = prompt('Название проекта?');
titleProject = getTitle(titleProject);

let screensValue = prompt('Какие типы экранов нужны?');
let responsive = confirm('Нужен ли адаптив на сайте?');
let allServiceNames = '';
let allServicePrices = getAllServicePrices();
let fullPrice = getFullPrice();
let servicePercentPrice = getServicePercentPrice();
let rollback = getRollbackMessage(fullPrice);

// 3. Вывод результатов в консоль

console.log('Название проекта:', titleProject);
console.log('Типы экранов:', screensValue);
console.log('Адаптив:', responsive);
console.log('Выбранные доп. услуги:', allServiceNames);
console.log('Общая стоимость доп. услуг:', allServicePrices);
console.log('Полная стоимость проекта:', fullPrice);
console.log('Стоимость за вычетом процента партнера:', servicePercentPrice);
console.log('Сумма скидки составляет:', rollback);
