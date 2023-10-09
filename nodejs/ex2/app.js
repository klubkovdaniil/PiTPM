// 2. Модули

const User = require('./user.js');
const greeting = require('./greeting.js'); // подключаем модуль

let eugene = new User('Eugene', 32);
const os = require('os');
let userName = os.userInfo().username; // получим имя текущего пользователя

console.log(`Дата запроса: ${greeting.date}`);
eugene.sayHi();
console.log(greeting.getMessage(userName));