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

//Starts

const filters = {
    searchText: ''
}

const renderTools = (todos, filters) => {
    const filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#todos').innerHTML = ''
    filteredTodos.forEach(function(todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderTools(todos, filters)


incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('p')

summary.textContent = `You have ${incompleteTodos.length} todos left`

todos.forEach((todo) => {
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.text
    document.querySelector('#todos').appendChild(todoEl)
})

//Ends

document.querySelector('body').appendChild(summary)

document.querySelector('#add-todo').addEventListener('click', (e) => {
    e.target.textContent = 'Todo Added'
    console.log('Todo Added')
})

document.querySelector('#todo-input').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTools(todos, filters)
})


