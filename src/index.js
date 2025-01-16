import "./styles.css";
import { home } from "./home.js"
import { menu } from "./menu.js"
import { about } from "./about.js"
import { contactUs } from "./contact.js"

let homeButton = document.querySelector("#home")
let menuButton = document.querySelector("#menu")
let aboutButton = document.querySelector("#about")
let contactButton = document.querySelector("#contact")

home();
homeButton.addEventListener("click", function () {
  home();
});

menuButton.addEventListener("click", function () {
  menu();
});

aboutButton.addEventListener("click", function () {
  about();
});

contactButton.addEventListener("click", function () {
  contactUs();
});