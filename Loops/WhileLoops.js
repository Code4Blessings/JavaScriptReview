//While Loops

//If j starts at 0, print j as long as j <=5
// let j = 0;

// while(j <= 5){
//     console.log(j);
//     j++
// }




//while(some condition)
//in the loop, update or attempt to make that condition false

//Break Keyword


const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while(true){
    if(target === guess) break;
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log('CONGRATS YOU WIN')