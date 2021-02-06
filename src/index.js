import {createHeader} from "./header.js";
import {showHome} from "./home.js";
import {showMenu} from "./menu.js"
import {showContact} from "./contact.js"

consol.log("Hello");

let home = document.getElementById("home");
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");
let infoTab = document.getElementById("infoTab");

window.addEventListener("load", (()=> {
    createHeader();
    showHome();
}
));

contact.addEventListener("click", showContact()); 

menu.addEventListener("click", showMenu());

home.addEventListener ("click", showHome());