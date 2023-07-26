let array1 = [1, "Yagnik", 3, true, 5.25];

console.log("Length of the array:", array1.length);

console.log("Element at index 3:", array1[3]);

array1.push("Meet"); 
console.log("Array after push:", array1);

array1.pop(); 
console.log("Array after pop:", array1);

array1.shift(); 
console.log("Array after shift:", array1);

array1.unshift(0); 
console.log("Array after unshift:", array1);

console.log("Array joined as string:", array1.join(", ")); 

delete array1[1];
console.log("Array after delete:", array1);

let array2 = [15.25, "Meet", false];
let finalArray = array1.concat(array2);
console.log("Joined array:", finalArray);

let nestedArray = [1, [2.26, 3], ["JavaScript", [true, 6]]];
let flattenedArray = nestedArray.flat(2);
console.log("Flattened array:", flattenedArray);

array1.splice(1, 2, 10, 11); 
console.log("Array after splice:", array1);


let slicedArray = array1.slice(2,5);
console.log("Sliced array:", slicedArray);



let person = {
    name: "Yagnik ladani",
    age: 18,
    gender: "Male",
    isStudent : true
};

function getData(obj) {
    console.log("Name:", obj.name);
    console.log("Age:", obj.age);
    console.log("Gender:", obj.gender);
}

getData(person);