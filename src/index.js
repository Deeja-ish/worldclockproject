
setInterval(
function updateTime(){
let laTime = document.querySelector("#los-angeles");
let laDate = laTime.querySelector(".date");
let laTimeElement = document.querySelector("#time");

let laMoment = moment()

laDate.innerHTML = laMoment.tz("America/Los_Angeles").format("MMMM Do YYYY");

laTimeElement.innerHTML = laMoment.tz("America/Los_Angeles").format("H:mm:ss [<small>]A[</small>]");


let pTime = document.querySelector("#paris");
let pDate = pTime.querySelector(".date");
let pTimeElement = document.querySelector("#ptime");

let pMoment = moment()

pDate.innerHTML = pMoment.tz("Europe/Paris").format("MMMM Do YYYY");

pTimeElement.innerHTML = pMoment.tz("Europe/Paris").format("H:mm:ss [<small>]A[</small>]");

}, 1000);
updateTime();

