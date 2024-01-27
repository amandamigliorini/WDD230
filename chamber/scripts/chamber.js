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

// get .visits and initialize element
const visitsElement = document.querySelector(".visits");

// getting current day
let currentDate = new Date();
let today = Date.now();

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;

// get the num of visits in the local storage if exists or (||) assign it to 0
let lastVisit = Number(window.localStorage.getItem('lastVisitLocal')) || currentDate;
//let lastVisit = new Date(lastVisitDay).getTime();

//getting the time since last visit
let daysSinceLastVisit = (today - lastVisit)/msToDays;

//display the num of visits or a message if is the first visit of the user
if(daysSinceLastVisit == 0){
    visitsElement.textContent = "Welcome! Let us know if you have any questions.";
}
else if ((daysSinceLastVisit > 0) && (daysSinceLastVisit < 1)){
    visitsElement.textContent = "Back so soon! Awesome!";
}
else{
    visitsElement.textContent = `You last visited ${daysSinceLastVisit} days ago`
}

localStorage.setItem('lastVisitLocal', today);