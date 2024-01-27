const p = document.querySelectorAll('p')

p.forEach((p) => {
    if (p.textContent.includes('the')) {
        p.remove()
    }
})