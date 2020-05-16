import ModalWindow from './pages/components/ModalWindow';

class View {
    constructor () {
        this._root = document.querySelector('div#root');
    }

    init = () => {
        const modalWindow = new ModalWindow();
        modalWindow.init();
    }
}

export default View;