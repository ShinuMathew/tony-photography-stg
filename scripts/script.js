const btnScrollToTop = document.querySelector('#scrollToTopBtn');
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