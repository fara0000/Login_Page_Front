class Controller {
    constructor( model,view ) {
        this._model = model;
        this._view = view;
        this.data = null;
    }
    init = () => {
        
    }

    init =()=> {
        this._view.init();
        this._view.getDataFromInput(this.getInputValue.bind(this));
        
    }

    getInputValue = person =>{
        if (!person) {
            return;
        }
        
        this.data = this._model.getDataFromModel();
        this.data.push(person);
       
       console.log(this.data);
    }
}
export default Controller;