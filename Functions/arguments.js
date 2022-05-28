//Arguments
function greet(name) {
    return 'Hi ' + name;
}

console.log(greet('Robin'));

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1
    console.log(`You rolled: ${roll}`)
};

function throwDice(numRolls) {
    for(let i=0; i < numRolls; i++){
        rollDie();
    }
}

console.log(throwDice(5))

//Parameters
function sum(x, y) {
    return x + y
}

console.log(sum(5,7));

function multiply(a , b) {
    return a * b
}

console.log(multiply(7, 8));