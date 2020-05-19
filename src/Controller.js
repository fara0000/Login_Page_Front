class Controller {
    constructor( model,view) {
        this._model = model;
        this._view = view;
        this.data = null;
    }

    init = () => {
        this._view.init();
        // this._view.checkRegInsertData(this.setDataFromModel.bind(this));
    }

    // setDataFromModel = () => {
       
    //     this.data = this._model.getDataFromModel();
    //     console.log(this.data);

    //     this.data.push(person);
        
    // }
}
export default Controller;