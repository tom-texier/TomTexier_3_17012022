const mainHeader = document.getElementById('main-header')

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    mainHeader.classList.add('fixed')
  } else {
    mainHeader.classList.remove('fixed')
  }
})
