import RegPage from './pages/RegPage/RegPage';

class Controller {
    constructor( model,regPage ) {
        this._model = model;
        this.regPage = regPage;
        this.data = null;
    }

    init = () => {
        this.regPage.init();
        this.regPage.getRegInputValue(this.checkRegInsertData.bind(this));
    }

    checkRegInsertData = person => {
        if(!person) return;

        console.log(person);
        
    }
}
export default Controller;