

function updateTime(){
let laTime = document.querySelector("#los-angeles");
if (laTime){
let laDate = laTime.querySelector(".date");
let laTimeElement = document.querySelector("#time");

let laMoment = moment()

laDate.innerHTML = laMoment.tz("America/Los_Angeles").format("MMMM Do YYYY");

laTimeElement.innerHTML = laMoment.tz("America/Los_Angeles").format("HH:mm:ss [<small>]A[</small>]");
}

let pTime = document.querySelector("#paris");
if (pTime){
let pDate = pTime.querySelector(".date");
let pTimeElement = document.querySelector("#ptime");

let pMoment = moment()

pDate.innerHTML = pMoment.tz("Europe/Paris").format("MMMM Do YYYY");

pTimeElement.innerHTML = pMoment.tz("Europe/Paris").format("HH:mm:ss [<small>]A[</small>]");
}
}



function changeCity(event){
  let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
  let displayCity = cityTimeZone.replace("_", " ").split("/")[1];


  let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city">
        <div>
            <h2>${displayCity}</h2>
            <div class="date">${moment().tz(cityTimeZone).format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${moment().tz(cityTimeZone).format("HH:mm:ss [<small>]A[</small>]")}</div>
        </div>
    `;

}

updateTime(); 
setInterval(updateTime, 1000);

let selectCity = document.querySelector("#select-city");


selectCity.addEventListener("change", function(event) { 
  setInterval(function() {
    changeCity(event);
  }, 1000);
});

