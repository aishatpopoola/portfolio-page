const toggler = e => {
  e.preventDefault();
  const thisElement = e.currentTarget;
  const {
    dataset: { toggle, classToToggle, secondClassToToggle, secondElementToToggle },
  } = thisElement;
  const targetedElement = document.querySelector(`#${toggle}`);
  const targetedElement2 = document.querySelector(`#${secondElementToToggle}`);
  if (thisElement.hasAttribute('data-second-class-to-toggle')) {
    targetedElement.classList.toggle(secondClassToToggle);
  }
  if (thisElement.hasAttribute('data-second-element-to-toggle')) {
    targetedElement.classList.add(classToToggle);
    targetedElement2.classList.remove(classToToggle);
    return;
  }
  targetedElement.classList.toggle(classToToggle);
};

document.querySelectorAll('.toggler').forEach(togglerItem => {
  togglerItem.addEventListener('click', toggler);
});






/*==================== CHANGE BACKGROUND HEADER ====================*/
const scrollHeader = () =>{
  console.log(scrollHeader);
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) {
    nav.classList.add('scroll-header');
  }  else {
    nav.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) {
      scrollUp.classList.add('show-scroll')
   } else { scrollUp.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', scrollUp)