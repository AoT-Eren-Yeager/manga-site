// Задача 1
// Создай три переменные: name (строка), age (число), isHappy (булево).
// Выведи их в консоль одной строкой через шаблонную строку.
// const name = 'Vitalia';
// const age = 16;
// const isHappy = true;

// console.log(`${name}, ${age}, ${isHappy}`);

// Задача 2
// Создай переменные:

// price = 100

// discount = 15 (процентов)

// Вычисли и выведи цену со скидкой.

// let price = 100;

// let discount = 15;

// let result = discount / price;
// console.log(price * result);

// Задача 3
// Создай переменные:

// length = 10

// width = 5

// Вычисли периметр прямоугольника: P = 2 * (length + width)


// let length = 10;
// let width = 5;
// let P = 2 * (length + width);
// console.log(P);

// Задача 4
// Создай переменную text со значением "JavaScript".
// Выведи длину строки (используй .length).
// let text = "JavaScript";
// console.log(text.length);

// Задача 5
// Создай переменные:

// firstName = "Иван"

// lastName = "Петров"

// Создай переменную fullName, которая объединяет их через пробел. Выведи.

// let firstName = "Иван";

// let lastName = "Петров";

// let fullName = (`${firstName} ${lastName}`);
// console.log(fullName);


// Задача 6
// Создай переменную number = 123.
// Преврати её в строку и выведи тип (используй typeof).

// let number = 123;
// console.log(typeof number);


// Задача 7
// Создай переменную isLoggedIn = false.
// Выведи: "Пользователь залогинен: false"

// let isLoggedIn = false;
// console.log(`Пользователь залогинен: ${isLoggedIn}`);

// Задача 8
// Создай переменную city = "Москва".
// Замени значение на "Санкт-Петербург". Выведи новое значение.

// let city = "Москва";
// city = "Санкт-Петербург";
// console.log(city);

// Задача 9
// Создай переменную x = 10 и y = 3.
// Выведи остаток от деления x на y.

// let x = 10;
// let y = 3;
// let result = y / x;
// console.log(x * result);

// Задача 10
// Создай переменную pi = 3.14159.
// Округли её до двух знаков после запятой (используй .toFixed(2)). Выведи.

// let pi = 3.14159
// console.log(pi.toFixed(2));

// Задача 11
// Попроси пользователя ввести число.
// Если число больше 10 — выведи "Число больше 10", иначе — "Число меньше или равно 10".

// let number = Number(window.prompt("Введите число: "));
// if (number >= 10) {
//     console.log("Число больше 10");
// } else {
//     console.log("Число меньше или равно 10");
// }


// Задача 12
// Попроси пользователя ввести два числа.
// Если первое больше второго — выведи "Первое больше", если второе больше — "Второе больше", если равны — "Числа равны".

// let number1 = Number(window.prompt("Введите певрое число: "));
// let number2 = Number(window.prompt("Введите второе число: "));

// if (number1 > number2) {
//     console.log("Первое больше");
// } else if (number2 > number1) {
//     console.log("Второе больше");
// } else if (number1 === number2) {
//     console.log("Числа равны");
// }

// Задача 13
// Попроси пользователя ввести число.
// Если число положительное — выведи "Положительное", если отрицательное — "Отрицательное", если ноль — "Ноль".

// let number = Number(window.prompt("Введите число: "));
// if (number > 0) {
//     console.log("Положительное");
// } else if (number < 0) {
//     console.log("Отрицательное");
// } else if (number === 0) {
//     console.log("Ноль");
// }