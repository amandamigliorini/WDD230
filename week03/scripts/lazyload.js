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

//adding last Modified data to the footer of the lazyload page
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = oLastModif.toLocaleDateString("en-US", options);