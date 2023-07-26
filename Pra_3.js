//Let Keyword
let num = 50;
console.log(num);

const PI = 3.14;
console.log(PI);

function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

// Arrow function
const sub = (a, b) => a - b;
console.log(sub(5, 3));


//Spread Opearator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2);

//For and of Keyword

for (const num of arr2) {
    console.log(num);
}

//Map functions
const map = new Map();
map.set('name', 'Yagnik');
map.set('age', 18);

console.log(map.get('name'));
console.log(map.has('age'));

map.delete('name');
console.log(map);

//Set Object
const set = new Set();
set.add("Hi");
set.add("Hello");
set.add("How are you?");
console.log(set);

set.delete("Hi");
console.log(set);

//Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        console.log(`This is ${this.name} and I am ${this.age} years old.`);
    }
}

const Yagnik = new Person('Yagnik', 18);
Yagnik.getDetails();

//Promise
const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Product Details';
            resolve(data);
        }, 2000);
    });
};

getData()
    .then(res => console.log(res))
    .catch(error => console.error(error));

const sym1 = Symbol("foo");
const sym2 = Symbol("foo");
console.log(sym1 === sym2);

function fun1(num = 15) {
    console.log(`My age is ${num}`);
}

fun1();
fun1(18);

function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5)); 
