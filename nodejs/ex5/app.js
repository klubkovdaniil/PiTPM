// указывает на путь к файлу node.exe
let nodePath = process.argv[0];
// указывает на путь к файлу приложения, который выполняется
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];

console.log('nodePath: ' + nodePath);
console.log('appPath: ' + appPath);
console.log();
console.log('Hello, ' + name);
console.log('Ur age: ' + age);