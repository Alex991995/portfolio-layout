import '../styles/main.scss';
import { validateForm } from './validate';

const menu = document.querySelector('.menu')
const closeIcon = document.querySelector('.menu__close-icon')
const promo = document.querySelector('.promo')
const form = document.querySelector('#form')

form.addEventListener('submit', function(event) {
  event.preventDefault()


  const resultFromValidation = validateForm(this)

  if(resultFromValidation){
    const myFormData = new FormData(this)
    
    const name = myFormData.get('name')
    const email = myFormData.get('email')
    const message = myFormData.get('message')

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: name,
        body: message,
        userId: 1,
        email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    this.reset()
    alert('Ваши данные успешно отправленны)')
  }
})




window.addEventListener('click', function(e) {
  if(e.target.closest('.burger')) {
    menu.classList.add('menu_active')
    promo.classList.add('promo_opacity')
  }
  else if(e.target === closeIcon) {
    menu.classList.remove('menu_active')
    promo.classList.remove('promo_opacity')
  }
  else {
    menu.classList.remove('menu_active')
    promo.classList.remove('promo_opacity')
  }

})

