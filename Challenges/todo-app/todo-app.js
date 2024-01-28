const todos = [{
    text: 'Finish DOM lesson',
    completed: false
}, {
    text: 'Make Breakfast',
    completed: true
}, {
    text: 'Setup New Gitlab Repo',
    completed: true
}, {
    text: 'Do work',
    completed: true
}, {
    text: 'Exercise',
    completed: false
}]

todos.forEach((todo) => {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

const summary = document.createElement('p')

incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

document.querySelector('body').appendChild(summary)

document.querySelector('button').addEventListener('click', (e) => {
    e.target.textContent = 'Todo Added'
})

summary.textContent = `You have ${incompleteTodos.length} todos left`


