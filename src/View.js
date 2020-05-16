import AutoPage from './AutoPage';

class View {
    constructor () {
        this._root = document.querySelector('div#root');
    }

    init = () => {
        this.autopage();
    }

    autopage = () => {
        const autopage = new AutoPage();
    }
}
export default View;