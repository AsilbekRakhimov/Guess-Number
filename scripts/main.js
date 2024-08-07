"use strict";

const myObj = {
  name: "Asilbek",
  age: 19,
  walk() {
    console.log(`${this.name} yuradi`);
  },
};

delete myObj.walk;

console.log(myObj);

const obj = new Object({
  name: "Asilbek",
});

obj["age"] = 29;

obj.walk = function () {
  console.log("Yuradi");
};

obj.walk();

const Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.read = function () {
    console.log(`${this.name} kitob o'qiydi`);
  };
};

const asilbek = new Person("Asilbek", 19);
console.log(asilbek.read());

const NEWoBJ = Object.assign({ age: 25 }, { name: "Tom" });

console.log(NEWoBJ);

const alex = Object.create({ name: "Alex" });

const obj2 = Object.fromEntries([["name", "John"],["age", 33]]);
console.log(obj2);

// console.log(obj2)

let person = {};

Object.defineProperty(person, "name", {
  value: "Asilbek",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(person, "name"));

// person.get = function () {
//   console.log(`${this.name} aaaaaaaaa`);
// };

// person.set = function (name) {
//   this.name = name;
// };

// person.get();
// person.set("Lazizbek");
// person.get();

const car = {
  brand: "Toyota",
  price: 120000,
  get getBrand() {
    console.log(`${this.brand}ning narxi ${this.price}`);
  },
  set setBrandName(brand) {
    this.brand = brand;
  },
};

Object.defineProperty(car, "getPrice", {
  get: function () {
    console.log(this.price);
  },
});

console.log(car);

car.getPrice;

car.getBrand;
car.setBrandName = "Lexus";
car.getBrand;
