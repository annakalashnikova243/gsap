const gameBotFunction = function () {
    function randomGenerate(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let mysteryNumber = randomGenerate(1, 100);
    let tries = 3; // количество попыток

    function isNumber(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    function getResult() {
        let userInput = prompt('Угадайте число от 1 до 100');

        // Проверка на "Отмену" при первом вводе
        if (userInput === null) {
            alert('Вы завершили игру');
            return;
        }

        while (userInput.trim() === '' || !isNumber(userInput)) {
            userInput = prompt('Введи число!');
            if (userInput === null) {
                alert('Вы завершили игру');
                return;
            }
        }

        let answerNum = +userInput.trim(); // чистое число

        if (mysteryNumber > answerNum) {
            alert('Загаданное число больше! Осталось попыток: ' + tries);
        } else if (mysteryNumber < answerNum) {
            alert('Загаданное число меньше! Осталось попыток: ' + tries);
        } else if (mysteryNumber === answerNum) {
            let playAgain = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (playAgain) {
                tries = 3;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
                return;
            } else {
                tries = 0;
                alert('Вы завершили игру');
                return;
            }
        }

        // Уменьшаем попытку на 1
        tries--;

        if (tries > 0) {
            getResult();
        } else {
            let tryAgain = confirm('Попытки закончились, хотите попробовать снова?');
            if (tryAgain) {
                tries = 3;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                alert('Вы завершили игру');
                return;
            }
        }
    }

    getResult();
};

// Запуск игры
gameBotFunction();
