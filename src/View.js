import Regpage from './RegPage';
import ModalWindow from './pages/components/ModalWindow';

import AutoPage from './pages/AutoPage/AutoPage';
import RegPage from './pages/RegPage/RegPage';
import ModalWindow from './pages/ModalWindow/ModalWindow';

class View {
    constructor () {
        this._root = document.querySelector('div#root');
}

init = () => {
    this.regpage();
}

regpage = () => {
    const regpage = new Regpage();
    }


    const autoPage = new AutoPage();
    autoPage.init();

    // const regPage = new RegPage();
    // regPage.init();

    // const modalWindow = new ModalWindow();
    // modalWindow.init();
}


}

export default View;