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
    }


}

export default View;