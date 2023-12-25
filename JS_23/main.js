// 1

let myName = "Даниил";
console.log(myName);

// ---------

let arr = [1, 2, 3, 4, 5];

arr.forEach((element) => {
  console.log(element);
});

// 2

function suumapor(a, b) {
  let summ = a + b;
  return summ;
}

console.log(suumapor(1, 2));

// ----------

function Student(name, age) {
  this.name = name;
  this.age = age;
}

let user = new Student("Даниил", 19);

console.log(user.name);
console.log(user.age);

// 3

let car = {
  marka: "Lada",
  year: 2010,
};

// ---------

let suits = ["hearts", "clubs", "Brooks Brothers", "diamonds", "spades"];
let count = suits.length / 2;

suits.splice(Math.floor(count), 0, "aaaa");

console.log(suits);

// 4

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(console.log("done")), 1000);
});

//--------

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(console.log("готово!")), 1000);
  });

  let result = await promise;
}

f();
