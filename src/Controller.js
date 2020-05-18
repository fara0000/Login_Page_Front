// import RegPage from './pages/RegPage/RegPage';

class Controller {
    constructor( model, regPage) {
        this._model = model;
        this.regPage = regPage;
    }

    init = () => {
        this.regPage.init();
        this.regPage.getRegInputValue(this.checkRegInsertData.bind(this));
    }

    checkRegInsertData = person => {
        if(!person) return;

        console.log(person, 'done');
        
    }
}
export default Controller;