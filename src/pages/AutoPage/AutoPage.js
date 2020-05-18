import RegPage from '../RegPage/RegPage';
import * as construct from '../../construct/constructs.js';

export default class AutoPage {
    constructor () {
        this._root = document.querySelector('#root');
        this._registration_link = null;
        this._container_login_page = null;
        this._input_login = null;
        this._input_password = null;
        this._button = null;
        this._registration_p = null;
    }

    init = () => {
        this._container_login_page = construct.createDiv({class: 'container_login_page'});
        this._login_heading = construct.createHeading({class: 'login_heading'});
        this._input_login = construct.createInput({id: 'input_login', type: 'email', placeholder: 'Enter your email...'});
        this._input_password = construct.createInput({id: 'input_password', type: 'password', placeholder: 'Enter your password...'});
        this._button = construct.createButton({class: 'button'});
        this._registration_p = construct.createParagraph({class: 'registration_p'});
        this._registration_link = construct.createLink({class: 'registration_link'});

        this._login_heading.innerHTML = 'Sign In';
        this._button.innerHTML = 'Submit';
        this._registration_p.innerHTML = 'Not registered? ';
        this._registration_link.innerHTML = '  Create an account';

        this._root.appendChild(this._container_login_page);
        this._container_login_page.appendChild(this._login_heading);
        this._container_login_page.appendChild(this._input_login);
        this._container_login_page.appendChild(this._input_password);
        this._container_login_page.appendChild(this._button);
        this._container_login_page.appendChild(this._registration_p);
        this._registration_p.appendChild(this._registration_link);
    }

    clickRegistration = cb => {
        this._registration_link.addEventListener('click', () => {
            this._container_login_page.remove();

            cb();
        })
    }
}
