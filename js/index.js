
const swiper = new Swiper('.swiper-container', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const toggler = e => {
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

/*==================== scroll API toggler ====================*/

const getScrollTogglerParams = [
  {
    id: "header",
    scrollPosition: 80,
    classToToggle: "scroll-header"
  },
  {
    id: "scroll-up",
    scrollPosition: 560,
    classToToggle: "show-scroll"
  }
];

const scrollToggler = (e) =>{
  for (let i = 0; i < getScrollTogglerParams.length; i += 1) {
    const { id, scrollPosition, classToToggle } =  getScrollTogglerParams[i];
    const elem = document.querySelector(`#${id}`); //'#' + id
    if (e.target.scrollingElement.scrollTop >= scrollPosition) {
      elem.classList.add(classToToggle);
    }  else { 
      elem.classList.remove(classToToggle)
    }
  }
}

window.addEventListener('scroll', scrollToggler)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.querySelector('#theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})