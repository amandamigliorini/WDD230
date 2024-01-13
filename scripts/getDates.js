// declaring variables to contain the last modified date and the current year for the footer
let oLastModif = new Date(document.lastModified);


const options = {		
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
};
let currentYear = new Date().toLocaleDateString("en-US", {year:"numeric"});

// adding current year and last modified to the footer

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = oLastModif.toLocaleDateString("en-US", options);
const yearElement = document.getElementById("year");
year.textContent = currentYear;
