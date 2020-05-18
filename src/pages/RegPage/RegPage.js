import ModalPage from '../ModalWindow/ModalWindow';
import * as construct from '../../construct/constructs.js';

export default class RegPage {
    constructor () {
        this._root = document.querySelector('#root');
        this.nameInput = null;
        this.emailInput = null;
        this.passwordInput = null;
        this.confirmPassword = null;
        this.button = null;
    }

    init = () => {
        const registration = construct.createDiv({class: 'registration'});
        const title = document.createElement('h1');
        title.setAttribute("class", "registration__title");
        title.innerHTML = ("Registration page");
        const form = document.createElement('form');
        form.setAttribute("class", "registration__form");
        this.nameInput = construct.createInput({class: 'registration__params', type: 'text', placeholder: 'Enter your name ( Elnur )'});
        this.emailInput = construct.createInput({class: 'registration__params', type: 'email', placeholder: 'Enter your email ( example@domain.com )'});
        this.passwordInput = construct.createInput({class: 'registration__params', type: 'password', placeholder: 'Create your password...'});
        this.confirmPassword = construct.createInput({class: 'registration__params', type: 'password', placeholder: 'Confirm your password...'});
        this.button = construct.createInput({class: 'registration__submit', type: 'submit'});
        this.button.setAttribute('value', 'Register');
        this.button.setAttribute('disabled', 'true');
        this.button.addEventListener('click', () => {
            registration.remove()
            const modal = new ModalPage()
            modal.init();
        });
        this._root.appendChild(registration);
        registration.appendChild(title);
        registration.appendChild(form);
        form.appendChild(this.nameInput);
        form.appendChild(this.emailInput);
        form.appendChild(this.passwordInput);
        form.appendChild(this.confirmPassword);
        registration.appendChild(this.button);
    }
   
}