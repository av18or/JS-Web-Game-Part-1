   // function newImage with parameters
   function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)    // append the body of HTML doc
    return object
}


        // function newItem with double-click event listener
function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}




// add images and position them
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 340)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 420)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 140)