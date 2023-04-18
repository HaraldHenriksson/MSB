// Import our styles
import './main.scss'

// Import all of Bootstrap's JS
import 'bootstrap/dist/js/bootstrap.js'

const pageOne = document.getElementById("pageOne")
const formBtn = document.getElementById("formBtn")
const pageTwo = document.getElementById("pageTwo")
const backBtn = document.getElementById("back")

function togglePages() {
    if (pageOne && pageTwo) {
        pageOne.classList.toggle("hide");
        pageTwo.classList.toggle("hide");
    }
}

if (formBtn) {
    formBtn.addEventListener("click", togglePages);
}

if (backBtn) {
    backBtn.addEventListener("click", togglePages);
}
