// Main js file
import "@babel/polyfill";
import{BtnPopup,BtnDropMenu,BtnScroll} from './actions.js'
import{Application} from './weather.js'

const application = new Application();
  application.renderData()
  
  BtnPopup()
  BtnDropMenu()
  BtnScroll()
  
  let loadData = () =>{
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
      })
    }
  loadData()
    .then(() => {
      let preloaderEl = document.getElementById('preloader');
      preloaderEl.classList.add('hidden');
      preloaderEl.classList.remove('visible');
    });
