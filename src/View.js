import AutoPage from './AutoPage';
class View {
    constructor () {
        this._root = document.querySelector('div#root');
    }
    init = () => {
        autopage();
    }
    autopage = () => {
        const autopage = new AutoPage ();
        autoPage.init();
    }
}
export default View;