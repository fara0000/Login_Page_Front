import Regpage from './RegPage';

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
}

export default View;