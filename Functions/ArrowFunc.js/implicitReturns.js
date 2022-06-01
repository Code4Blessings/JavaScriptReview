//Implicit Returns - You don't have to use the return key for a function.  You can just make a one-liner if we're talking about a single expression

//Example

// const square = n => {
//     return n*n
// }

//If you have one expression with no variables, then you can write your function like this instead

// const square = n => (
//     n*n
// )

//or 

const square = n => n*n

console.log(square(4))

// You cannot use parenthsis when you can't make a one-liner with a function.  Use curly braces instead.

//Example 2

const numbers = [21,22,23,24,25,26,27];

const doubles = numbers.map(function(num) {
    return num *2
})

console.log(doubles)

//instead...

const doubles2 = numbers.map((n) => {
    return n*2
})

//or

const doubles3 = numbers.map(n => n*2)

console.log(doubles2)
console.log(doubles3)