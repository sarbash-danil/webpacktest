export let BtnPopup = () => {
    document.querySelector('.btn__head').addEventListener('click', ()=> {    
        document.querySelector('.popup').classList.add('popup__show');
    })
    document.querySelector('.close').addEventListener('click', ()=> {
        document.querySelector('.popup').classList.remove('popup__show');
    })
}
export let BtnDropMenu = () => {
    document.querySelector('.dropmenu-toggler').addEventListener('click', ()=> {    
        document.querySelector('.dropmenu').classList.add('dropmenu--show'); 
    })
    document.querySelector('.menu__link--close').addEventListener('click', ()=> {  
        e.preventDefault(); 
        document.querySelector('.dropmenu').classList.remove('dropmenu--show');
    })
}
export let BtnScroll = () =>{
    document.querySelector('#scrollToTop').addEventListener('click', ()=>{
        event.preventDefault();
        var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if(top > 600) {
            window.scrollBy(0,-2000);	
        } 
        return false;
    });
}  
    setTimeout(function () {
        document.querySelector('.scrollToTop').classList.add('scrollToTop__show');
    },7000)
