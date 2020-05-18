import RegPage from '../RegPage/RegPage';
import * as construct from '../../construct/constructs.js';

export default class AutoPage {
    constructor () {
        this._root = document.querySelector('#root');
    }

    init = () => {
        const container_login_page = construct.createDiv({class: 'container_login_page'});
        const login_heading = construct.createHeading({class: 'login_heading'});
        const input_login = construct.createInput({id: 'input_login', type: 'email', placeholder: 'Enter your email...'});
        const input_password = construct.createInput({id: 'input_password', type: 'password', placeholder: 'Enter your password...'});
        const button = construct.createButton({class: 'button'});
        const registration_p = construct.createParagraph({class: 'registration_p'});
        const registration_link = construct.createLink({class: 'registration_link'});

        registration_link.addEventListener('click', () => {
            container_login_page.remove()
            const registrationPage = new RegPage()

            registrationPage.init()
        });

        login_heading.innerHTML = 'SIGN IN'
        button.innerHTML = 'Submit'
        registration_p.innerHTML = 'Not registered? '
        registration_link.innerHTML = '  Create an account'
        this._root.appendChild(container_login_page)
        container_login_page.appendChild(login_heading);
        container_login_page.appendChild(input_login);
        container_login_page.appendChild(input_password);
        container_login_page.appendChild(button);
        container_login_page.appendChild(registration_p);
        registration_p.appendChild(registration_link);
    }

}



