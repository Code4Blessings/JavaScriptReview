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