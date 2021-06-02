// Variables to be passed into each pages render function.
let title = document.getElementById("title")
let content = document.querySelector(".main")
// title.textContent = "dsdsasda"

// Import the seperate pages Js files.
import { homeSet } from "./pages/home.js";
import {conSet} from "./pages/contact.js"
import {eventSet} from "./pages/events.js"

// Nav and page switching handler
import {navGen} from "./nav.js"

// Run NavGen and set nav to the object it returns
const nav = navGen();

// Home is the default so automatically render it
nav.navHandler(homeSet, content, title, nav.home)

// Event Listeners for each of the nav buttons
nav.contact.addEventListener("click", () => {
    nav.navHandler(conSet, content, title, nav.contact)
})

nav.home.addEventListener("click", () => {
    console.log("REGI")
    nav.navHandler(homeSet, content, title, nav.home)
})

nav.events.addEventListener("click", () => {
    nav.navHandler(eventSet, content, title, nav.events)
})



// nav.navHandler(conSet, content, title, nav.contact)

// Automatically start the homereturn function since that is the landng page.
// homeSet(content, title);
