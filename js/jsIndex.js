document.getElementsByClassName('nav-toggler')[0].addEventListener('click', () => {
    let navItems = document.getElementsByClassName('nav-items')
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.toggle('collapsed')
    }
})