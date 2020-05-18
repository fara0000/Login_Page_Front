import AutoPage from './pages/AutoPage/AutoPage';
import RegPage from './pages/RegPage/RegPage';
import ModalWindow from './pages/ModalWindow/ModalWindow';

class View {
    constructor (regPage) {
        this.regPage = regPage;
        this.authPage = new AutoPage();
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

        console.log(person, 'done');
    }
}

export default View;