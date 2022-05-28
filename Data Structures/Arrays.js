let shoppingList = ['oatmeal', 'pancake mix', 'tofu', 'spinach']

// console.log(shoppingList[2])
// console.log(shoppingList.length)

// shoppingList[0] = 'turkey bacon'

// console.log(shoppingList);

// shoppingList.push('almond milk')

//Shift/Unshift

shoppingList.unshift('veggies')

const array1 = [-1, 5, 10, 20, 28, 3]
const array2 = [26, 134, 135, 15, 17]

//let array3 = array1.concat(array2)
//let sortedArray2 = array2.sort();

let sliceNum = array1.slice(0,4)


console.log(shoppingList)

//console.log(sortedArray2)

console.log(sliceNum)

//ReferenceTypes

let nums = [5,6,7,8]
let otherNums = nums;

console.log(otherNums)

//Nested Arrays

const colors = [
    ['red', 'crimson'],
    ['orange', 'blue'],
    ['black', 'purple', 'green']
]

console.log(colors[2][1])