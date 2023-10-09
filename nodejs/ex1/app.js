// 1. Первое приложение на Node.js

const http = require('http'); // встроеный модуль http необходим для создания сервера
http.createServer(function (request, response) { // создаём сервер
    response.end('Hello NodeJS!'); // ответ сервера
}).listen(3000, '127.0.0.1', function () { // слушаем входящие подключения на сервер, в начале прослушивания запускаем функцию
    console.log(
        'Сервер начал прослушивание запросов на порту 3000'
    );
});