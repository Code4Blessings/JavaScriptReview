//Higher Order Functions
    //--> Functions that operate on/with other functions.  They can:
    //- Accept other functions as arguments
    // - Return s function


//Functions as Objects

function add(x,y) {
    return x+y
}

const subtract = function (x,y) {
    return x-y
}


function multiply(x,y) {
    return x*y
}

const divide = function(x,y) {
    return x/y
}

const operations = [add, subtract, multiply, divide]

console.log(operations[0](1,3))
console.log(operations[1](1,3))
console.log(operations[2](1,3))
console.log(operations[3](1,3))

for(let func of operations) {
    let result = func(30, 5)
    console.log(result)
}

//Functions as Arguments

//Example 

function callThreeTimes(f) {
    f();
    f();
    f();
}

function happy() {
    console.log("Ohhh I'm so happy!!!")
}

function meet() {
    console.log("Great to meet you")
}

console.log(callThreeTimes(happy))

//Call a function n times

function repeatNTimes(action, num) {
    for(let i = 0; i < num; i++) {
        action()
    }
}

console.log(repeatNTimes(happy, 5));

function pickOne(f1, f2) {
    let rand = Math.random();
    if(rand < 0.5) {
        f1();
    }else {
        f2()
    }
}

console.log(pickOne(happy, meet));


//Returning A Function from Within a Function

function multiplyBy(num) {
    return function(x) {
        return x * num
    }
}

const triple = multiplyBy(3)
const double = multiplyBy(2)

console.log(triple(4)) //12
console.log(double(4)) //8
