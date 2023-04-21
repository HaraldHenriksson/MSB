// Import our styles
import './main.scss'

// Import all of Bootstrap's JS
import 'bootstrap/dist/js/bootstrap.js'

const pageOne = document.getElementById("pageOne")
const formBtn = document.getElementById("formBtn")
const pageTwo = document.getElementById("pageTwo")
const backBtn = document.getElementById("back")
const pageThree = document.getElementById("pageThree")
const submitBtn = document.getElementById("submit")
const doneBtn = document.getElementById("done")

function togglePages(firstPage: HTMLElement | null, secondPage: HTMLElement | null) {
    if (firstPage && secondPage) {
        firstPage.classList.toggle("hide");
        secondPage.classList.toggle("hide");
    }
}

if (formBtn) {
    formBtn.addEventListener("click", () => togglePages(pageOne, pageTwo));
}

if (backBtn) {
    backBtn.addEventListener("click", () => togglePages(pageOne, pageTwo));
}

if (submitBtn) {
    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        togglePages(pageTwo, pageThree);
    });
}

if (doneBtn) {
    doneBtn.addEventListener("click", () => togglePages(pageOne, pageThree));
}

const menyBtn = document.querySelector('.search-menu > div:last-child') as HTMLElement;
const hamburgerBtn = document.querySelector('.navbar-toggler') as HTMLElement;

menyBtn.addEventListener('click', () => {
    hamburgerBtn.click();
});