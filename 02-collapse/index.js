let activeCollaps = false

const collapsButton = document.querySelector('.collapsible__button')
const collapsibleActionVisible = document.querySelector(
  '.collapsible__action--visible'
)
const collapsibleActionHidden = document.querySelector(
  '.collapsible__action--hidden'
)
const collapsibleContent = document.querySelector('.collapsible__content')
collapsibleContent.style.height = '0'
collapsibleContent.style.overflow = 'hidden'
collapsibleActionVisible.style.display = 'none'
collapsibleContent.style.backgroundColor = '#e8e8e8'

const collaps = () => {
  if (activeCollaps) {
    collapsibleContent.style.height = '0'
    collapsibleActionVisible.style.display = 'none'
    collapsibleActionHidden.style.display = 'block'
    collapsibleContent.animate([{ height: '50px' }, { height: 0 }], {
      duration: 200,
    })
  } else {
    collapsibleContent.style.height = '50px'
    collapsibleActionVisible.style.display = 'block'
    collapsibleActionHidden.style.display = 'none'
    collapsibleContent.animate([{ height: 0 }, { height: '50px' }], {
      duration: 200,
    })
  }
  activeCollaps = !activeCollaps
}

collapsButton.onclick = collaps
