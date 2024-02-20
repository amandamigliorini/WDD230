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
    daysSinceLastVisit = Math.floor(daysSinceLastVisit);
    visitsElement.textContent = `You last visited ${daysSinceLastVisit} days ago`
}

localStorage.setItem('lastVisitLocal', today);


// WEATHER CODE

//get the elements from the information card that is related to the weather
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");


// define the api url using my city's data
const url = "https://api.openweathermap.org/data/2.5/weather?lat=-24.726967085004386&lon=-53.748923914928255&units=imperial&appid=5eeb01c6caa5abd41bdf4f2759f15ad4";



async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
       // console.log(error);
    }
}
function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = ` ${data.weather[0].description}`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].main );
    captionDesc.textContent = `${desc}`;
}


apiFetch();
