//Array Callback Methods

//forEach - accepts a callback function.  Call the function once per element in the array

const numbers = [21,22,23,24,25,26,27];

numbers.forEach(function(num, idx) {
    console.log(idx, num);
})

//forEach you can use the index for free, a regular for loop, you have to generate it yourself

function printTriple(n) {
    console.log(n*3)
}



numbers.forEach(printTriple);

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.11
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }
]

books.forEach(function(book) {
    console.log(book.title.toUpperCase());
})

//same as for...Of

for(let book of books) {
    console.log(book.title.toUpperCase());
}

//The difference between the two is forEach uses a callback

//A regular for loop, we have to use i

for(let i=0; i < books.length; i++) {
    console.log(books[i].title.toUpperCase())
}

//If you must use the index, then use a regular for loop.  The other 2 methods do not use i

