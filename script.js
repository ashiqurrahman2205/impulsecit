var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

var CountDownDate = new Date("Feb 5, 2025 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = CountDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
const ham = document.getElementById("ham");
const cross = document.getElementById("cross");
const content = document.getElementById("content");
const home = document.getElementById("home1");
const events = document.getElementById("events1");
const about = document.getElementById("about1");
const register = document.getElementById("register1");

console.log(ham);
ham.addEventListener("click", () => {
  content.classList.remove("slide-out-right");
  content.classList.add("slide-in-right");
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
cross.addEventListener("click", () => {
  content.classList.remove("slide-in-right");
  content.classList.add("slide-out-right");
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
home.addEventListener("click", () => {
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
about.addEventListener("click", () => {
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
contact.addEventListener("click", () => {
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
register.addEventListener("click", () => {
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
events.addEventListener("click", () => {
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
