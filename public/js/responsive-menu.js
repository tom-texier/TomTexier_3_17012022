const toggleMenu = document.querySelectorAll('.responsive-menu-toggle')
const menu = document.querySelector('#main-header nav')

toggleMenu.forEach(element => {
  element.addEventListener('click', function () {
    menu.classList.toggle('open')
  })
})
