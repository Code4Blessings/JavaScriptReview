//For Loops and Arrays
const examScores = [98, 77, 84, 91, 57, 66];

for(let i=0; i<= examScores.length; i++) {
    console.log(examScores[i]);
}

const greekGodStudents = [
    {
        firstName: 'Zeus',
        grade: 86
    },
    {
        firstName: 'Artemis',
        grade: 97
    },
    {
        firstName: 'Hera',
        grade: 72
    },
    {
        firstName: 'Apollo',
        grade: 90
    },
];


for(let i=0; i < greekGodStudents.length; i++) {
    let student = greekGodStudents[i];
    console.log(`${student.firstName} scored a ${student.grade}!`)
}



