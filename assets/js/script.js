'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDate = document.querySelector("[data-modal-date]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalDate.innerHTML = this.querySelector("[data-testimonials-date]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const p_select = document.querySelector("[project-select]");
const p_selectItems = document.querySelectorAll("[project-select-item]");
const p_selectValue = document.querySelector("[project-select-value]");
const p_filterBtn = document.querySelectorAll("[project-filter-btn]");

p_select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < p_selectItems.length; i++) {
  p_selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    p_selectValue.innerText = this.innerText;
    elementToggleFunc(p_select);
    p_filterFunc(selectedValue);

  });
}

// filter variables
const p_filterItems = document.querySelectorAll("[project-filter-item]");

const p_filterFunc = function (selectedValue) {

  for (let i = 0; i < p_filterItems.length; i++) {

    if (selectedValue === "all") {
      p_filterItems[i].classList.add("active");
    } else if (selectedValue === p_filterItems[i].getAttribute("project-category")) {
      p_filterItems[i].classList.add("active");
    } else {
      p_filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let p_lastClickedBtn = p_filterBtn[0];

for (let i = 0; i < p_filterBtn.length; i++) {

  p_filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    p_selectValue.innerText = this.innerText;
    p_filterFunc(selectedValue);

    p_lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    p_lastClickedBtn = this;

  });

}

// custom select variables
const b_select = document.querySelector("[blog-select]");
const b_selectItems = document.querySelectorAll("[blog-select-item]");
const b_selectValue = document.querySelector("[blog-select-value]");
const b_filterBtn = document.querySelectorAll("[blog-filter-btn]");

b_select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < b_selectItems.length; i++) {
  b_selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    b_selectValue.innerText = this.innerText;
    elementToggleFunc(b_select);
    b_filterFunc(selectedValue);

  });
}

// filter variables
const b_filterItems = document.querySelectorAll("[blog-filter-item]");

const b_filterFunc = function (selectedValue) {

  for (let i = 0; i < p_filterItems.length; i++) {

    if (selectedValue === "all") {
      b_filterItems[i].classList.add("active");
    } else if (selectedValue === b_filterItems[i].getAttribute("blog-category")) {
      b_filterItems[i].classList.add("active");
    } else {
      b_filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let b_lastClickedBtn = b_filterBtn[0];

for (let i = 0; i < b_filterBtn.length; i++) {

  b_filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    b_selectValue.innerText = this.innerText;
    b_filterFunc(selectedValue);

    b_lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    b_lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
