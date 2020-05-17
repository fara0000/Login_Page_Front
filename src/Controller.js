class Controller {
    constructor( model,view ) {
        this._model = model;
        this._view = view;
        this.data = null;
    }

    init = () => {
        this._view.init();
        this._view.getData(this.checkInsertedData.bind(this));
        
    }

    checkInsertedData = person =>{
        if(!person) return;

        console.log(person);
        
    }
}
export default Controller;