class Controller {
    constructor( model,view ) {
        this._model = model;
        this._view = view;
        this.data = null;
    }

    init = () => {
        this._view.init();
        // this._view.getDataFromInput(this.checkInsertedData.bind(this));
        
    }

    // checkInsertedData = person =>{

    // }
}
export default Controller;