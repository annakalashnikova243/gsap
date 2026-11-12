// let titleProject = 'Оценка стоимости';
//let screensValue = 'шаблонные, с уникальным дизайном, с анимацией';
let screenPrice = 1000;
let partnerPercent = 10;
//let fullPrice = 15000;
//let responsive = true; 

let titleProject = prompt('Название проекта?');
console.log(titleProject);
let screensValue = prompt('Какие типы экранов нужны?');
console.log(screensValue);
let responsive = confirm('Нужен ли адаптив на сайте?');
console.log(responsive);
let service1 = prompt('Какой сервис нужен?');
console.log(service1);
let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(servicePrice1);
let service2 = prompt('Какой еще сервис тебе нужен?');
console.log(service2);
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');
console.log(servicePrice2);
let fullPrice = servicePrice1 + servicePrice2 + screenPrice;
console.log(fullPrice);
let servicePercentPrice = Math.round(fullPrice - (fullPrice * partnerPercent) / 100);
console.log(servicePercentPrice);
if (fullPrice < 0) {
    console.log('Что-то пошло не так');
} else if (fullPrice === 0) {
    console.log("Цена равна 0 — услуга бесплатна или не задана");
} else if (fullPrice === 50000 || fullPrice === 20000) {
    console.log("Стандартная цена!");
} else if (fullPrice > 50000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
}

// Функции 
function getAllServicePrices() {
    return servicePrice1 + servicePrice2;
}
  let AllServicePrices = getAllServicePrices();
console.log(AllServicePrices);

function getFullPrice() {
    return screenPrice + AllServicePrices;
}
fullPrice = getFullPrice();
console.log(fullPrice);

function getTitle(titleProject) {
    let firstLetter = titleProject.charAt(0).toUpperCase();
    let restLetters = titleProject.slice(1).toLowerCase();
    return firstLetter + restLetters;
}
titleProject = getTitle(titleProject);
console.log(titleProject);

function getServicePercentPrice() {
    return Math.round(fullPrice - (fullPrice * partnerPercent) / 100);
}
servicePercentPrice = getServicePercentPrice();
console.log(servicePercentPrice);

function getRollbackMessage(fullPrice) {
    let discountAmount = 0;
if (fullPrice < 0) {
        console.log('Что-то пошло не так');
    } else if (fullPrice === 0) {
        console.log("Цена равна 0 — услуга бесплатна или не задана");
    } else if (fullPrice === 50000 || fullPrice === 20000) {
        console.log("Стандартная цена!");
    } else if (fullPrice > 50000) {
        console.log('Даем скидку в 10%');
        discountAmount = (fullPrice * 10) / 100; 
    } else if (fullPrice > 20000 && fullPrice < 50000) {
        console.log('Даем скидку в 5%');
        discountAmount = (fullPrice * 5) / 100;  
    } else if (fullPrice < 20000 && fullPrice > 0) {
        console.log('Скидка не предусмотрена');
    }
return discountAmount;
}
let rollback = getRollbackMessage(fullPrice);
console.log("Сумма скидки составляет: " + rollback);

