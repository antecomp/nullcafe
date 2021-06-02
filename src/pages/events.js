const eventSet = (element, title) => {
    title.textContent = "Events"
    element.innerHTML = `
    <div id="events">
    <div class="event">
            <img src="./assets/rave.png">
            <b>PsychaRave</b><br>
            <i>Monday @ 11pm</i>
            <p>Come to the third annual PsychaRave, an insane party to be enjoyed by all</p>
        </div>
        <div class="event">
            <img src="./assets/drinks.png">
            <b>Oldies Happy Hour</b><br>
            <i>Wednesday @ 5pm</i>
            <p>Celebrate the the classic beverages from the 2010s</p>
        </div>
        <div class="event">
            <img src="./assets/ipaddr.png">
            <b>Hacking Jam</b><br>
            <i>Saturday @ 1am</i>
            <p>Help the Null Cafe take down our coorporate enemies! First person to breach Starbucks gets 500 credits!</p>
        </div>
    </div>
    `
}

export { eventSet }