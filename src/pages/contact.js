const conSet = (element, title) => {
    title.textContent = "Contact"
    element.innerHTML = `
    <div class="contactcard">
    <h3>For Questions and Concerns</h3>
    <b>Email:</b><a> nully@null.cafe</a> <br>
    <b>Phone:</b><a> (123)-122-1237</a> <br>
    <b>Nanotech BrainComID:</b><a> X55-17181-A18292-JDJ887</a>
    </div>
    `
}

export { conSet }