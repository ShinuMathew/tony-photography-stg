const btnScrollToTop = document.getElementById('scrollToTopBtn');
const myFooter = document.getElementById('my-footer');
const bodySpace = document.querySelector('.body-space');
btnScrollToTop.addEventListener('click', function() {
    setTimeout(function () {
        bodySpace.scrollTo({
            top : 0, 
            left : 0,
            behavior : 'smooth'
        })
    },200);
});
window.addEventListener("wheel", displayScrollToTop)
function displayScrollToTop() {
    var triggerBottom = window.innerHeight / 2 * 6;
    const top = myFooter.getBoundingClientRect().top
    if(top < triggerBottom){        
        btnScrollToTop.style.display = 'block'    
    } else {
        btnScrollToTop.style.display = 'none'
    }
}