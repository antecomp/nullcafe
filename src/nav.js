let navGen = () => {
    let linkCon = document.querySelector(".links")
    let home = document.createElement("a")
    let contact = document.createElement("a")
    let events = document.createElement("a")
    home.textContent = "home"
    contact.textContent = "contact"
    events.textContent = "events"
    linkCon.appendChild(home)
    linkCon.appendChild(contact)
    linkCon.appendChild(events)
    // Function for changing active page
    let navHandler = (func, content, title, item) => {
        func(content, title);
        let links = document.querySelectorAll(".links a")
        console.log(links)
        links.forEach(child => {
            child.classList.remove("active")
        })
        item.classList.add("active")
    }
    return {home, contact, events, navHandler}
}



export { navGen }