const fitBit = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5785,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
}
//Call Items from An Object

console.log(fitBit.totalMiles)

//Accessing Object Properties when using an invalid identifier such as for example '100' below.  But if the key is not in quotes 

const numbers = {
    '100': 'one hundred',
    '16': 'sixteen'
}

console.log(fitBit['totalSteps'])
console.log(numbers[100])

//Updating and Adding properties

const userReviews = {}

userReviews.MrSmith = 3.5;
userReviews['MsWarden'] = 4.0;

console.log(userReviews)

//Nested Arrays and Objects

