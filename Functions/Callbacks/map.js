//Map:
//creates a new array with the results of calling a callback on every element in the array

const numbers = [21,22,23,24,25,26,27];

const doubles = numbers.map(function(num) {
    return num *2
})

console.log(doubles)

//Decide if the numbers is even or odd

const numDetail = numbers.map(function(n) {
    return {
        value: n,
        isEven: n%2 === 0
    }
})

console.log(numDetail)

//Take each abbreviation in the array, capitalize and separate by period
//Example: 'asap' //'A.S.A.P'

const words = ['asap', 'byob', 'rsvp', 'diy']

const abbrevs = words.map(function(word) {
    return word.toUpperCase().split('').join('.')
})

console.log(abbrevs)

//Make an array of just titles from this existing array

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

const titles = books.map(function(book) {
    return book.title
})

console.log(titles)

