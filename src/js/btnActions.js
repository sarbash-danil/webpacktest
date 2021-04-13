export {actions};

function actions() {
    document.querySelector('.btn__head').addEventListener('click', () => {    
        document.querySelector('.popup').classList.add('popup__show');
    })
    document.querySelector('.dropmenu-toggler').addEventListener('click', () => {    
        document.querySelector('.dropmenu').classList.add('dropmenu--show');//  не работает toggle 
    })
    document.querySelector('.menu__link--close').addEventListener('click', () => {  
        e.preventDefault(); 
        document.querySelector('.dropmenu').classList.remove('dropmenu--show');
    })
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.popup').classList.remove('popup__show');
    })
    // scroll to top
    document.querySelector('#scrollToTop').addEventListener('click', () =>{
        event.preventDefault();
        var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if(top > 600) {
            window.scrollBy(0,-2000);	
        } 
        return false;
    });
    
    setTimeout(() => {
        document.querySelector('.scrollToTop').classList.add('scrollToTop__show');
    },7000)
}

