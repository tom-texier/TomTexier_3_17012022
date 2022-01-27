const myTicketsButton = document.getElementById('my-tickets')
const popup = document.getElementById('basket')

const closeButtons = popup.querySelectorAll('.close, .overlay')

myTicketsButton.addEventListener('click', function () {
  popup.classList.add('show')
  document.querySelector('body').style.overflow = 'hidden'
})

closeButtons.forEach(element => {
  element.addEventListener('click', function () {
    popup.classList.remove('show')
    document.querySelector('body').style.overflow = 'unset'
  })
})
