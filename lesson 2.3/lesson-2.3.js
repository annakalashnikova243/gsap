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
