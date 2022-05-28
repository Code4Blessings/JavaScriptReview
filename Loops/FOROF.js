//For...Of Loops

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for(let i = 0; i < subreddits.length; i++) {
    console.log('For Loop', subreddits[i]);
}
//Same statement below, just written differently

for(let sub of subreddits) {
    console.log('For..Of Loop', sub)
}

//Example for of loop characters of a string
for(let char of 'cockadoodledoo') {
    console.log(char.toUpperCase());
}

//Example #2
const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

//Add up items in each array using for loop
for(let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;
    for(let j=0; j<row.length; j++) {
        sum +=row[j];
    }
    console.log(`For Loop - ${row} summed to ${sum}`)
}

//Add up items in each array using for Of loop
for(let row of magicSquare) {
    let sum = 0;
    for(let num of row) {
        sum += num;
    }
    console.log(`For Of Loop - ${row} summed to ${sum}`)
}

//Situation where For..Of isn't helpful
const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for(let i=0; i<words1.length; i++) {
    console.log(`${words1[i]}${words2[i]}`);
}

//Looping over objects
const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    SpiderMan: 10,
    'X-Men-Days of Future Past': 9.5,
    Morbius: 8
}

//For Loop doesn't work for this.  
for(let movie of Object.keys(movieReviews)) {
    console.log(movie)
}

//To Access the values
for(let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie])
}

//Get the average of the reviews
const ratings = Object.values(movieReviews);
let total = 0;
for(let r of ratings) {
    total +=r;
}
let avg = total /= ratings.length;
console.log(avg)
