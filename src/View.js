import AutoPage from './pages/AutoPage/AutoPage';
import RegPage from './pages/RegPage/RegPage';
import ModalWindow from './pages/ModalWindow/ModalWindow';

class View {
    constructor () {
        this._root = document.querySelector('div#root');
}

    init = () => {        
        const autoPage = new AutoPage();
        autoPage.init();
        const regPage = new RegPage();
        regPage.getInputValue(this.getData.bind(this));
    }

    getData = cb => {
        // regPage.getInputValue();

        cb(this.person);
    }

}

export default View;