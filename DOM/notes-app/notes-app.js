const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'

}]

document.querySelector('#create-note').addEventListener('click', function (e) {
    console.log('Did this work?')
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function () {
        //note.remove()
        console.log('Deleting all notes')
})

