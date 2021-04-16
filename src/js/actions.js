export {actionBtn};
function actionBtn() {
    document.querySelector('.btn__head').addEventListener('click', function() {    
        document.querySelector('.popup').classList.add('popup__show');
    })
    document.querySelector('.dropmenu-toggler').addEventListener('click', function() {    
        document.querySelector('.dropmenu').classList.add('dropmenu--show');//  не работает toggle 
    })
    document.querySelector('.menu__link--close').addEventListener('click', function() {  
        e.preventDefault(); 
        document.querySelector('.dropmenu').classList.remove('dropmenu--show');
    })
    document.querySelector('.close').addEventListener('click', function () {
        document.querySelector('.popup').classList.remove('popup__show');
    })
    // scroll to top
    document.querySelector('#scrollToTop').addEventListener('click', function (){
        event.preventDefault();
        var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if(top > 600) {
            window.scrollBy(0,-2000);	
        } 
        return false;
    });
    setTimeout(function () {
        document.querySelector('.scrollToTop').classList.add('scrollToTop__show');
    },7000)
}
