//Write a isValidPassword function
//It accepts 2 arguments: password and username
//Password must:
//-be at least 8 characters
//-cannot contain spaces
// - cannot contain username
//If all requirements are met, return true
//Otherwise return false

function isValidPassword(username, password) {
    if(password.length < 8){
        return false;
    }
    if (password.indexOf(' ') > 0) {
        return false;
    }
    if(password === username) {
        return false;
    }
    return true;
}

console.log(isValidPassword('RobinBird', 'loveSolomon'));

//Write a function to find the average valiue in an array of numbers

function averageValue(arr) {
    let total = 0
    for(let num of arr) {
        total += num
    }
    let avg = total / arr.length
    return avg;
}

console.log(averageValue([75, 76, 80, 95, 100]));

// A pangram is a sentence that contains every letter of the alphabet like:
//"The quick brown fox jumps over the lazy dog"
//Write a funcyion called isPangram, which checks to see of a given sentence contains every letter of the alphabet.  Make sure you ignore string casting.
//Test Sample: 'The five boxing wizards jump quickly'

function isPangram(sentence) {
    //1. loop over the sentence
    //2. If sentence doesn't contain all letters of the alphabet, return false, otherwise true
    // const alphabets1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    // const alphabets2 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
    for(let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(sentence.toLowerCase().indexOf(char) === -1) {
            return false
        }
    }
    return true
}

console.log(isPangram('The five boxing wizards jump quick'))

//Write a getCard() function which returns a random playing card object, like:
// {
//     value: 'King',
//     suit: 'Clubs'
// }
//Pick a random value from:
//---A,2,3,4,5,6,7,8,9,10,J,Q,K,
//Pick a random suit from:
//---clubs,spades,hearts,diamonds
//Return both in an object

//Will pick a random value from an array(by the index) but since random will return a decimal from 0 - 1, we multiply it by its length.  To get rid of the decimal, we wrap the random function with Math.floor.
function getCard() {
    //Pick a random value from:
//---A,2,3,4,5,6,7,8,9,10,J,Q,K,
    values = ['A','2',3,4,5,6,7,8,9,10,'J','Q','K']
    suits = ['clubs','spades','hearts','diamonds']
    valCard = values[Math.floor(Math.random() * values.length)]
    //Pick a random suit from:
//---clubs,spades,hearts,diamonds
    suitCard = suits[Math.floor(Math.random() * suits.length)]
    return {value: valCard, suit: suitCard}
}

console.log(getCard());