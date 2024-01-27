// To remove duplicates from an array of objects in JavaScript, you can use a combination of the filter() and some() methods.
// Here's an example code snippet that removes duplicates based on the name, age, and state properties:

const people = [
    {
        name: 'Craig',
        age: 47,
        state: 'New York'
    },
    {
        name: 'Craig',
        age: 47,
        state: 'New York'
    },
    {
        name: 'Jennifer',
        age: 39,
        state: 'Chicago'
    },
    {
        name: 'Taylor',
        age: 35,
        state: 'Virginia'
    }
];

const uniquePeople = people.filter((person, index, self) =>
    index === self.findIndex((p) =>
        p.name === person.name && 
        p.age === person.age &&
        p.state === person.state
    )
);

console.log(uniquePeople);

// The filter() method loops through each element of the array and returns a new array that contains only the elements for which the callback function returns true.

// The some() method is used inside the callback function of the findIndex() method to check if there is any other element in the array with the same name, age, and state properties.

// The findIndex() method returns the index of the first element that satisfies the callback function. If no such element is found, it returns -1. So, by checking if the index of the current element is the same as the index of the first element that satisfies the callback function, we can determine if the current element is a duplicate or not.

// The resulting array "uniquePeople" will contain only the unique objects from the original array "people".
