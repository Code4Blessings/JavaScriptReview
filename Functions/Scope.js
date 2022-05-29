//Scope
//Scope - "Variable visibility."  The location where a variable is defined dictates where we have accesss that variable.


//console.log(color) -  This doesn't work at this level because the color variable is bound to the function. It cannot be accessed outside of it.

//Block Scope - variable is locked inside the block of code. However, var can be accessed outside of the block

//Example

function doubleArr(arr) {
    const result = [];
    let double;
    for(let num of arr) {
        double = num * 2
        result.push(double);
    }
    return result;
}

//console.log(doubleArr)