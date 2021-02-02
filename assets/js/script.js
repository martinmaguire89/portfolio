  const boxes = document.querySelectorAll('.box')
  const boxes2 = document.querySelectorAll('.box2')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
    boxes2.forEach(box2 => {
        const boxTop = box2.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box2.classList.add('show')
        } else {
            box2.classList.remove('show')
        }
    })
}