
function validateForm(form) {
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  let result = true

  for (const input of form) {
    removeError(input)

    if(input.classList.contains('form__input-name')){
      if(input.value.trim() === '') {
          createError(input, 'поле не заполненно')
          result = false
        }
    }
    else if(input.classList.contains('form__input-email')){
      if(!regex.test(input.value) ){
        createError(input, 'введите правильную почту')
        result = false
      }
    }
    else if(input.classList.contains('form__textarea')) {
      if(input.value.trim().length < 3) {
        createError(input, 'недостаточное количество символов')
        result = false
      }
    }
  }

  return result
}

function createError(input, text) {
  if(!input.classList.contains('btn') && !input.classList.contains('error')){
    const parent = input.parentNode
    const errorLabel = document.createElement('label')
    
    errorLabel.classList.add('error-label')
    errorLabel.textContent = text
    input.classList.add('error')
    parent.append(errorLabel)
  }
}

function removeError(input) {
  if(input.classList.contains('error')){
    const parent = input.parentNode
    const errorLabel = parent.querySelector('.error-label')

    input.classList.remove('error')
    errorLabel.remove()
  }
}

export { validateForm }