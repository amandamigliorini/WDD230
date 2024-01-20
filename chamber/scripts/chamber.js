// bussiness spotlights slideshow code
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide-card");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

// declaring variables to contain the last modified date on the footer
let oLastModif = new Date(document.lastModified);
const options = {		
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
};
//declaring navigation variables
const hamburguerElement = document.querySelector("#menu");
const navElements = document.querySelector(".navigation");

//declaring dark mode variables
const darkButton = document.getElementById('darkBtn');
const main = document.querySelector('main')


// adding modified to the footer

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = oLastModif.toLocaleDateString("en-US", options);

//adding class for open and close hamburguer menu
hamburguerElement.addEventListener('click', () => {
    navElements.classList.toggle('open');
    hamburguerElement.classList.toggle('open');
    
})

//code for dark mode click
darkButton.addEventListener('click',() =>{
    main.classList.toggle('dark');
})
