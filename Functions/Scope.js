//Scope
//Scope - "Variable visibility."  The location where a variable is defined dictates where we have accesss that variable.

//Example

function lol() {
    let person = 'Tom';
    const age = 45;
    var color = 'red'
}

//console.log(color) -  This doesn't work at this level because the color variable is bound to the function. It cannot be accessed outside of it.

