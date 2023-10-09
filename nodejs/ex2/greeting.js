// console.log('greeting module');

let currentDate = new Date(); // в целом тут с датами и так понятно
module.exports.date = currentDate;

module.exports.getMessage = function (name) {
    let hour = currentDate.getHours();
    if (hour > 16) return 'Добрый вечер, ' + name;
    else if (hour > 10) return 'Добрый день, ' + name;
    else return 'Доброе утро, ' + name;
};
