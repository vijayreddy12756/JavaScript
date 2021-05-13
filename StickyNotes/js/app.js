//add button

let btn = document.getElementById('addBtn')
btn.addEventListener('click', (e) => {
    let content = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(content.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    content.value = ""
    showNotes();
})
// function to show Notes 
const showNotes = () => {
    let contents = localStorage.getItem("notes")

    if (contents == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(contents)
    }
    let html = ""
    notesObj.forEach((element, index) => {
        html += `<div class="card my-2 mx-2 noteCard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <a id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
        </div>
    </div>`
    });

    let nodeelem = document.getElementById('notes')
    if (contents.length != 0) {
        nodeelem.innerHTML = html
    } else {
        nodeelem.innerHTML = `Nothing to show!`
    }

}

// function to delete a specific note

const deleteNote = (k) => {

    let contents = localStorage.getItem("notes")
    let contentObj = JSON.parse(contents)
    contentObj.forEach((element, index) => {
        if (index == k) {
            contentObj.splice(k, 1)

        }
    })
    localStorage.setItem("notes", JSON.stringify(contentObj))
    showNotes()

}


let search = document.getElementById('searchTxt')
// search listener
search.addEventListener("input", () => {
    let inputVal = search.value.toLowerCase()
    let notecards = document.getElementsByClassName('noteCard')
    Array.from(notecards).forEach((element) => {
        let cardTxt = element.getElementsByTagName('p')[0].innerText
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block"
        } else {
            element.style.display = "none"

        }
    })

})