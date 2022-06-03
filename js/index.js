const toggler = e => {
  e.preventDefault();
  const thisElement = e.currentTarget;
  const {
    dataset: { toggle, classToToggle, secondClassToToggle },
  } = thisElement;
  const targetedElement = document.querySelector(`#${toggle}`);
  if (thisElement.hasAttribute('data-second-class-to-toggle')) {
    targetedElement.classList.toggle(secondClassToToggle);
  }
  targetedElement.classList.toggle(classToToggle);
};

document.querySelectorAll('.toggler').forEach(togglerItem => {
  togglerItem.addEventListener('click', toggler);
});

// QUALIFICATION TABS
const tabs = document.querySelectorAll('[data-target]');
const tabsContents = document.querySelectorAll('[data-content]');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabsContents.forEach(tabsContent => {
      tabsContent.classList.remove('qualification_active');
    });
    target.classList.add('qualification_active');
    tabs.forEach(tab => {
      tab.classList.remove('qualification_active');
    });
    tab.classList.add('qualification_active');
  });
});

// SERVICES MODAL
const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalClose = document.querySelectorAll('.services_modal-close');


const modalOpen = modalClick => {
    modalViews[modalClick].classList.add('active-modal');
    };
modalBtns.addEventListener('click',modalOpen)



