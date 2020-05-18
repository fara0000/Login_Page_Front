class Controller {
    constructor( model,view) {
        this._model = model;
        this._view = view;
    }

    init = () => {
        this._view.init();
    }
}

export default Controller;
