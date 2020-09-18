
const navButton = document.querySelector('.navButton')

// ***** Functions *****

// function to add a class
function toggleElement() {
    let toggle = document.querySelector(".nav");
    toggle.classList.toggle("hidden");
}

// event listeners
navButton.addEventListener("click", toggleElement);
