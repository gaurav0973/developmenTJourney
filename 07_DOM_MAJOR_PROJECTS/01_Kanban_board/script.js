let draggingElement = null

function addTask(columnId){
    const input = document.getElementById(`${columnId}-input`)
    console.log(input)
    const inputValue = input.value.trim()
    if(inputValue.length === 0)
        return

    const taskElement = createTaskElement(inputValue)

    const parent = document.getElementById(`${columnId}-tasks`)
    parent.append(taskElement)

    input.value = ""

}

function createTaskElement(inputValue){
    const div = document.createElement("div")
    div.textContent = inputValue
    div.classList.add("card")
    // drag and drop functionality
    div.draggable=true
    div.addEventListener("dragstart", dragStart)
    div.addEventListener("dragend", dragEnd)
    return div
}


function dragStart(){
    // this.classList.add("dragging")
    draggingElement = this
}

function dragEnd(){
    // this.classList.remove("dragging")
    draggingElement = null
}


const columns = document.querySelectorAll(".tasks")
columns.forEach((column)=>{
    column.addEventListener("dragover", dragOver)
})

function dragOver(e){
    e.preventDefault()
    this.append(draggingElement)
}