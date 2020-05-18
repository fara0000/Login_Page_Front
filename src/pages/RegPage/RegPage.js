import ModalPage from '../ModalWindow/ModalWindow';
import * as construct from '../../construct/constructs.js';

export default class RegPage {
    constructor () {
        this._root = document.querySelector('div#root');
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
        this.nameInput = construct.createInput({id:'nameInput', class: 'registration__params', type: 'text', placeholder: 'Enter your name ( Elnur )'});
        this.emailInput = construct.createInput({id:'emailInput', class: 'registration__params', type: 'email', placeholder: 'Enter your email ( example@domain.com )'});
        this.passwordInput = construct.createInput({id:'passwordInput', class: 'registration__params', type: 'password', placeholder: 'Create your password...'});
        this.confirmPassword = construct.createInput({id:'confirmPassword', class: 'registration__params', type: 'password', placeholder: 'Confirm your password...'});
        this.button = construct.createInput({id:'regButton',class: 'registration__submit', type: 'submit'});
        this.button.setAttribute('value', 'Register');
        this._root.appendChild(registration);
        registration.appendChild(title);
        registration.appendChild(form);
        form.appendChild(this.nameInput);
        form.appendChild(this.emailInput);
        form.appendChild(this.passwordInput);
        form.appendChild(this.confirmPassword);
        registration.appendChild(this.button);
    }

    getRegInputValue = cb => {
        this.button.addEventListener('click', () => {
            const person = {
                name: this.nameInput.value,
                email: this.emailInput.value,
                password: this.passwordInput.value,
                confirmPassword: confirmPassword.value,
            }
            
            cb(person);
            
        })

    }
}