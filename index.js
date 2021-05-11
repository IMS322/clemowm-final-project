//linkedin button
var url= "https://linkedin.com/in/mariah-clemow/www.google.com"

function liFunction () {
    document.getElementById("Linkedin").onclick;
    location.href= url
}
console.log(url)

//instagram button
var url2= "https://www.instagram.com/mariahclemow/"

function IiFunction () {
    document.getElementById("Instagram").onclick;
    location.href= url2
}
console.log(url2)

//pinterest button
var url3= "https://pinterest.com/mariahclemow0"

function PiFunction () {
    document.getElementById("Pinterest").onclick;
    location.href= url3
}
console.log(url3)

//contact input form
function firstNameHandler(event) {
    console.log("Called")
    document.getElementById('name-value').innerHTML = document.getElementById('name').value
}

function EmailHandler(event) {
    console.log("Called")
    document.getElementById('email-value').innerHTML = document.getElementById('email').value
}

function saveContact(event) {
    event.preventDefault()
    var user = JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        description: document.getElementById('message-description').value
    })

   alert(`Thanks! Your information has been saved!`)

}