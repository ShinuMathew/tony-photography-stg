const boxes = document.querySelectorAll('.box')
const body = document.querySelector('.body-space');
window.addEventListener("wheel", checkBoxes)
checkBoxes()
function checkBoxes() {
    console.log("scrolled")
    var triggerBottom = window.innerHeight / 5 * 3;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        console.log(`boxTop: ${boxTop}`)
        console.log(`triggerBottom: ${triggerBottom}`)
        if(boxTop < triggerBottom){
            box.classList.add('show')            
        } else {
            box.classList.remove('show') 
        }
    })
}