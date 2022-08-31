const collapsButton = document.querySelector('.collapsible__button')
const collapsibleVisible = document.querySelector(
  '.collapsible__action--visible'
)
const collapsibleHidden = document.querySelector('.collapsible__action--hidden')
const collapsibleContent = document.querySelector('.collapsible__content')

collapsibleContent.style.height = '0'
collapsibleContent.style.overflow = 'hidden'
collapsibleContent.style.backgroundColor = '#e8e8e8'
collapsibleVisible.style.display = 'none'

let activeCollaps = false

const collaps = () => {
  if (activeCollaps) {
    collapsibleContent.style.height = '0'
    collapsibleVisible.style.display = 'none'
    collapsibleHidden.style.display = 'block'
    collapsibleContent.animate([{ height: '50px' }, { height: 0 }], {
      duration: 200,
    })
  } else {
    collapsibleContent.style.height = '50px'
    collapsibleVisible.style.display = 'block'
    collapsibleHidden.style.display = 'none'
    collapsibleContent.animate([{ height: 0 }, { height: '50px' }], {
      duration: 200,
    })
  }
  activeCollaps = !activeCollaps
}

collapsButton.onclick = collaps
