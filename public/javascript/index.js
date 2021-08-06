function hideDelete(){
    var deleteBtn = document.querySelectorAll('.deleteBtn')
    console.log(deleteBtn)
    deleteBtn.forEach(element => {
        element.setAttribute('hidden','')
    })
}
hideDelete()