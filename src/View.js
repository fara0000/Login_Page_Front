import AutoPage from './pages/AutoPage/AutoPage';
import RegPage from './pages/RegPage/RegPage';
import ModalWindow from './pages/ModalWindow/ModalWindow';
import Model from './Model';
import {sendGetRequest,sendPutRequest} from './REST';

class View {
    constructor (regPage) {
        this.regPage = regPage;
        this.authPage = new AutoPage();
        this.modalWindow = new ModalWindow();
        this.model = new Model();
        this.data = null;
    }

    init = () => {
        this.authPage.init();
        this.authPage.clickRegistration(this.initRegPage.bind(this));
    }

    initRegPage = () => {
        this.regPage.init();
        this.regPage.getRegInputValue(this.checkRegInsertData.bind(this));
    }

    checkRegInsertData = person => {
        if (!person) return;

        this.data = this.model.getDataFromModel();
        this.data.push(person);
        const promise = new Promise(function(res, rej){
             res(sendPutRequest(person));
         });

        this.modalWindow.init();

        console.log(this.data, 'done');
    }
}

export default View;