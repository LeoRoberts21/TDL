




function todoList() {
    let item = document.getElementById("todoInput").value
    let text = document.createTextNode(item)
    let newItem = document.createElement("li")
    newItem.className = ('tasks')
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)
    
    item = document.getElementById("todoInput").value = "";
    
    newItem.addEventListener('click', function(){
    newItem.style.textDecoration = "line-through";
    })

    newItem.addEventListener('dblclick', function(){
        document.getElementById("todoList").removeChild(newItem);
    })
}
