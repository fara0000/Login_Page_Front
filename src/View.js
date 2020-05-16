import modalWindow from './ModalWindow';

class View {
    constructor () {
        this._root = document.querySelector('div#root');
    }

    init = () => {
        modalWindow.init();
    }
}

export default View;