//Find - returns the fist element in the array that saisfies the provided testing function.

//Example

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs.Doubtfire",
    "Mr. Deeds"
]

let movie = movies.find(movie => movie.includes('Mrs'))

console.log(movie)

//Example #2

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
];

greatBook = books.find(book => book.rating >= 4.3)

console.log(greatBook)