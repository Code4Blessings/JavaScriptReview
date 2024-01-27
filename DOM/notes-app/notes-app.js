//DOM - Document Object Model

//Query and remove
// const p = document.querySelector('p')
// console.log(p)

//Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach((p) => {
    p.textContent= '********'
    //p.remove()
})

//Add a new element

const newP = document .createElement('p')

newP.textContent = 'This is a new element from JS'

document.querySelector('body').appendChild(newP)