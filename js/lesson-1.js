// Task-1


// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

console.log("Task - 1");

const number = Number(prompt('Введіть число'));

if (number === 10) {
  alert('Вірно');
} else {
  alert('Невірно');
}

// Task-2

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * 59);

console.log("Task - 2");

const min = Math.floor(Math.random() * 59);

if (min >= 0 && min <= 14) {
  alert(`${min} входить в першу чверть`);
} else if (min >= 15 && min <= 29) {
  alert(`${min} входить в другу чверть`);
} else if (min >= 30 && min <= 44) {
  alert(`${min} входить в третю чверть`);
} else {
  alert(`${min} входить в четверту чверть`);
}

// Task-3

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

console.log("Task - 3");

const num = prompt('Введіть число від 1 до 4');
let result;

switch (num) {
  case '1':
    result = 'зима';
    break;
  case '2':
    result = 'весна';
    break;
  case '3':
    result = 'літо';
    break;
  case '4':
    result = 'осінь';
    break;
  default:
    result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
}

console.log(result);

// Task-4

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

console.log("Task - 4");

const totalMinutes = Number(prompt('Введіть кількість хвилин'));

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
console.log(formattedTime);

// Task-5

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

console.log("Task - 5");

const login = prompt('Введіть логін');
console.log(login);

if (login === 'Адмін') {
  const password = prompt('Введіть пароль');

  if (password === 'Я головний') {
    alert('Добрий день!');
  } else {
    alert('Невірний пароль!');
  }
} else if (login === null || login === '') {
  alert('Скасовано');
} else {
  alert('Я вас не знаю');
}

// Task-6

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

console.log("Task - 6");

let i = 0;

while (i <= 20) {
  console.log(i);
  i++;
}

// Task-7

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

console.log("Task - 7");

function getNumbers(min, max) {
    let sum = 0;

    for (let i = max; i >= min; i--) {
        console.log(i);

        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(getNumbers(2, 15));
console.log(getNumbers(3, 9));
console.log(getNumbers(1, 20));

// Task-8

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

console.log("Task - 8");

function min(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Not a number!';
  }

  return a < b ? a : b;
}

console.log(min(5, 12));
console.log(min('5', 12));
console.log(min(10, 7));
console.log(min(15, '1'));

// Task-9


// Task-10

