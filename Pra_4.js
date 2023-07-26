function factorial(number) {
    function factorialNumber(num) {
        if (num <= 1) 
            return 1;
        else
            return num * factorialNumber(num - 1);
    }

    return factorialNumber(number);
}

let globalVar = "Global variable";

function checkVariable() {
    let localVar = "Local variable";

    console.log("Get global variable:", globalVar);
    console.log("Get local variable:", localVar);
}

const number = 10;
console.log(`Factorial of ${number} is:`, factorial(number));

checkVariable();
