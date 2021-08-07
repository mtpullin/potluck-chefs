function hideDelete(){
    var deleteBtn = document.querySelectorAll('.deleteBtn')
    deleteBtn.forEach(element => {
        element.setAttribute('hidden','')
    })
}
hideDelete()