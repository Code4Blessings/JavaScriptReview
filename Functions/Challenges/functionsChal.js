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

