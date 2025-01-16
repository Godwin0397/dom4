function displayUserEnteredValues(){
    var firstName = document.getElementById("firstName").value
    var middleName = document.getElementById("middleName").value
    var lastName = document.getElementById("lastName").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    let label_createFunCall1 = label_create("p", "id", "pTagFirstName", `First Name: ${firstName}`)
    let label_createFunCall2 = label_create("p", "id", "pTagMiddleName", `Middle Name: ${middleName}`)
    let label_createFunCall3 = label_create("p", "id", "pTagLastName", `Last Name: ${lastName}`)
    let label_createFunCall4 = label_create("p", "id", "pTagEmail", `Email: ${email}`)
    let label_createFunCall5 = label_create("p", "id", "pTagPassword", `Password: ${password}`)
    document.body.append(label_createFunCall1, label_createFunCall2, label_createFunCall3, label_createFunCall4, label_createFunCall5)
    console.log("First Name: ", firstName, "Middle Name: ", middleName, "Last Name: ", lastName, "Email: ", email, "Password: ", password)
}

function label_create(tagName, attributeName, attributeValue, content){
    var labelTag = document.createElement(tagName)
    labelTag.setAttribute(attributeName, attributeValue)
    labelTag.innerHTML = content
    return labelTag
}

function input_create(tagName, attribute1Name, attribute1Value, attribute2Name, attribute2Value){
    var inputTag = document.createElement(tagName)
    inputTag.setAttribute(attribute1Name, attribute1Value)
    inputTag.setAttribute(attribute2Name, attribute2Value)
    return inputTag
}

function breaktag_create(tagName){
    var breakTag = document.createElement(tagName)
    return breakTag
}

let elementToCreate = [
    {
        tag1: "label",
        for: "for",
        type: "type",
        text: "text",
        id: "id",
        common: "firstName",
        content: "First Name",
        tag2: "input",
        tag3: "br"
    },
    {
        tag1: "label",
        for: "for",
        type: "type",
        text: "text",
        id: "id",
        common: "middleName",
        content: "Middle Name",
        tag2: "input",
        tag3: "br"
    },
    {
        tag1: "label",
        for: "for",
        type: "type",
        text: "text",
        id: "id",
        common: "lastName",
        content: "Last Name",
        tag2: "input",
        tag3: "br"
    },
    {
        tag1: "label",
        for: "for",
        type: "type",
        text: "text",
        id: "id",
        common: "email",
        content: "email",
        tag2: "input",
        tag3: "br"
    },
    {
        tag1: "label",
        for: "for",
        type: "type",
        text: "text",
        id: "id",
        common: "password",
        content: "Password",
        tag2: "input",
        tag3: "br"
    }
]

for (let x of elementToCreate){
    let label_createFunCall = label_create(x.tag1, x.for, x.common, x.content)
    let breaktag_createFunCall = breaktag_create(x.tag3)
    let input_createFunCall = input_create(x.tag2, x.type, x.text, x.id, x.common)
    let breaktag_createFunCall1 = breaktag_create(x.tag3)
    document.body.append(label_createFunCall, breaktag_createFunCall, input_createFunCall, breaktag_createFunCall1)
}

let breaktag_createFunCall = breaktag_create("br")
var buttonTag = document.createElement("button")
buttonTag.type = "button"
buttonTag.setAttribute("onclick", "displayUserEnteredValues()")
buttonTag.innerHTML = "Click Me"
document.body.append(breaktag_createFunCall, buttonTag)

