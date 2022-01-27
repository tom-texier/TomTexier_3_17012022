const mainHeader = document.getElementById('main-header')

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    mainHeader.classList.add('sticky')
  } else {
    mainHeader.classList.remove('sticky')
  }
})
