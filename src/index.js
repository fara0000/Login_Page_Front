import Model from "./Model.js";
import View from "./View.js";
import Controller from "./Controller.js";
import RegPage from './pages/RegPage/RegPage';
import './pages/AutoPage/styles.less';
import './pages/RegPage/styles.less';
import './pages/ModalWindow/styles.less';

function initialize() {
    const model = new Model(); 
    const regPage = new RegPage();
    const view = new View(); 
    const controller = new Controller(model, regPage);
    
    controller.init();
}

initialize();