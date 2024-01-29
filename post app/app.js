function setBackground(){
    var postBackground  = document.getElementById("text-bg")
    postBackground.style.backgroundImage = 'url('+event.target.src+')'
}

function changecolor(){
    var textArea = document.getElementById("text-area")
    textArea.style.color = event.target.value
}   


function changeStyle(){
    var textArea = document.getElementById("text-area")
type = event.target.innerText;
if(type==="B"){
    if( textArea.style.fontWeight==="bold"){
        textArea.style.fontWeight = "normal"
event.target.style.color = "black"
    } else {
        textArea.style.fontWeight="bold"
        event.target.style.color = "red"

    }
}
if(type==="I"){
    if( textArea.style.fontStyle==="italic"){
        textArea.style.fontStyle = "normal"
event.target.style.color = "black"
    } else {
        textArea.style.fontStyle="italic"
        event.target.style.color = "red"

    }
}
if(type==="U"){
    if( textArea.style.textDecoration==="underline"){
        textArea.style.textDecoration = "none"
event.target.style.color = "black"
    } else {
        textArea.style.textDecoration="underline"
        event.target.style.color = "red"

    }
}
}
function changeSize(){
textArea = document.getElementById("text-area")
textArea.style.fontSize = event.target.value + "px"
}

function display(){
    items = document.getElementById("item")
create = document.getElementById("create")
items.style.display = "none"
create.style.display = "none"




}