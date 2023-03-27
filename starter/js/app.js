const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links') // on sélectionne la class qui s'appelle nav-links
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => { // on ajoute un addEventListener à la const navBtnDom
  links.classList.toggle('show-links') // la class links a un hidden, et donc quand on clique dessus toute la nav va apparaitre grace à la class show-links ! 
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
